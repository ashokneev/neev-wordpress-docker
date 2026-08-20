"use client"

import { useEffect, useRef, useCallback } from "react"
import createGlobe from "cobe"

interface GlobeCdnProps {
  className?: string
  speed?: number
}

const NEEV_MARKERS = [
  { location: [37.43, -121.9] as [number, number], size: 0.05, label: "Milpitas, CA (HQ)" },
  { location: [37.77, -122.42] as [number, number], size: 0.03, label: "San Francisco, CA" },
  { location: [47.61, -122.33] as [number, number], size: 0.03, label: "Seattle, WA" },
  { location: [17.39, 78.49] as [number, number], size: 0.05, label: "Hyderabad, India" },
]

const NEEV_ARCS: [number, number][][] = [
  [NEEV_MARKERS[0].location, NEEV_MARKERS[3].location], // Milpitas → Hyderabad
  [NEEV_MARKERS[1].location, NEEV_MARKERS[2].location], // SF → Seattle
  [NEEV_MARKERS[2].location, NEEV_MARKERS[3].location], // Seattle → Hyderabad
  [NEEV_MARKERS[0].location, NEEV_MARKERS[1].location], // Milpitas → SF
  [NEEV_MARKERS[0].location, NEEV_MARKERS[2].location], // Milpitas → Seattle
]

function latLngTo3D(lat: number, lng: number): [number, number, number] {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lng + 180) * (Math.PI / 180)
  return [
    Math.sin(phi) * Math.cos(theta),
    Math.cos(phi),
    Math.sin(phi) * Math.sin(theta),
  ]
}

function rotateYAxis(x: number, y: number, z: number, a: number): [number, number, number] {
  return [x * Math.cos(a) + z * Math.sin(a), y, -x * Math.sin(a) + z * Math.cos(a)]
}

function rotateXAxis(x: number, y: number, z: number, a: number): [number, number, number] {
  return [x, y * Math.cos(a) - z * Math.sin(a), y * Math.sin(a) + z * Math.cos(a)]
}

function projectPoint(lat: number, lng: number, currentPhi: number, currentTheta: number) {
  let [x, y, z] = latLngTo3D(lat, lng)
  ;[x, y, z] = rotateXAxis(x, y, z, -currentTheta)
  ;[x, y, z] = rotateYAxis(x, y, z, currentPhi)
  return { x, y, z }
}

function slerp(a: [number, number, number], b: [number, number, number], t: number): [number, number, number] {
  const dot = a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
  const omega = Math.acos(Math.min(1, Math.max(-1, dot)))
  if (Math.abs(omega) < 0.001) return a
  const sinO = Math.sin(omega)
  const fa = Math.sin((1 - t) * omega) / sinO
  const fb = Math.sin(t * omega) / sinO
  return [a[0] * fa + b[0] * fb, a[1] * fa + b[1] * fb, a[2] * fa + b[2] * fb]
}

export function GlobeCdn({
  className = "",
  speed = 0.003,
}: GlobeCdnProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const overlayRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const labelRefs = useRef<(HTMLDivElement | null)[]>([])
  const pointerInteracting = useRef<{ x: number; y: number } | null>(null)
  const dragOffset = useRef({ phi: 0, theta: 0 })
  const phiOffsetRef = useRef(0)
  const thetaOffsetRef = useRef(0)
  const isPausedRef = useRef(false)

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    pointerInteracting.current = { x: e.clientX, y: e.clientY }
    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing"
    isPausedRef.current = true
  }, [])

  const handlePointerUp = useCallback(() => {
    if (pointerInteracting.current !== null) {
      phiOffsetRef.current += dragOffset.current.phi
      thetaOffsetRef.current += dragOffset.current.theta
      dragOffset.current = { phi: 0, theta: 0 }
    }
    pointerInteracting.current = null
    if (canvasRef.current) canvasRef.current.style.cursor = "grab"
    isPausedRef.current = false
  }, [])

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (pointerInteracting.current !== null) {
        dragOffset.current = {
          phi: (e.clientX - pointerInteracting.current.x) / 300,
          theta: (e.clientY - pointerInteracting.current.y) / 1000,
        }
      }
    }
    window.addEventListener("pointermove", handlePointerMove, { passive: true })
    window.addEventListener("pointerup", handlePointerUp, { passive: true })
    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("pointerup", handlePointerUp)
    }
  }, [handlePointerUp])

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    const overlay = overlayRef.current
    let globe: ReturnType<typeof createGlobe> | null = null
    let animationId: number
    let phi = 0

    function updateOverlays(currentPhi: number, currentTheta: number) {
      const container = containerRef.current
      if (!container) return
      const size = container.offsetWidth
      const cx = size / 2
      const cy = size / 2
      const r = size * 0.45

      // Update label positions
      NEEV_MARKERS.forEach((marker, i) => {
        const el = labelRefs.current[i]
        if (!el) return
        const p = projectPoint(marker.location[0], marker.location[1], currentPhi, currentTheta)
        if (p.z > 0.05) {
          const screenX = cx + p.x * r
          const screenY = cy - p.y * r
          el.style.transform = `translate(${screenX}px, ${screenY}px)`
          el.style.opacity = String(Math.min(1, (p.z - 0.05) * 4))
          el.style.display = "flex"
        } else {
          el.style.display = "none"
        }
      })

      // Draw arcs on overlay canvas
      if (!overlay) return
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      overlay.width = size * dpr
      overlay.height = size * dpr
      overlay.style.width = size + "px"
      overlay.style.height = size + "px"
      const ctx = overlay.getContext("2d")
      if (!ctx) return
      ctx.clearRect(0, 0, overlay.width, overlay.height)
      ctx.scale(dpr, dpr)

      NEEV_ARCS.forEach((arc) => {
        const from3D = latLngTo3D(arc[0][0], arc[0][1])
        const to3D = latLngTo3D(arc[1][0], arc[1][1])
        const steps = 40
        ctx.beginPath()
        let started = false

        for (let s = 0; s <= steps; s++) {
          const t = s / steps
          const interp = slerp(from3D, to3D, t)
          // Lift arc above surface
          const lift = 1 + 0.08 * Math.sin(t * Math.PI)
          let ax = interp[0] * lift
          let ay = interp[1] * lift
          let az = interp[2] * lift
          ;[ax, ay, az] = rotateXAxis(ax, ay, az, -currentTheta)
          ;[ax, ay, az] = rotateYAxis(ax, ay, az, currentPhi)

          if (az > 0) {
            const sx = cx + ax * r
            const sy = cy - ay * r
            if (!started) {
              ctx.moveTo(sx, sy)
              started = true
            } else {
              ctx.lineTo(sx, sy)
            }
          } else {
            started = false
          }
        }
        ctx.strokeStyle = "rgba(59, 130, 246, 0.35)"
        ctx.lineWidth = 1.5
        ctx.stroke()
      })
    }

    function init() {
      const width = canvas.offsetWidth
      if (width === 0 || globe) return

      globe = createGlobe(canvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width: width * 2,
        height: width * 2,
        phi: 0,
        theta: 0.2,
        dark: 0,
        diffuse: 1.5,
        mapSamples: 16000,
        mapBrightness: 10,
        baseColor: [1, 1, 1],
        markerColor: [0.2, 0.4, 0.8],
        glowColor: [0.94, 0.93, 0.91],
        markers: NEEV_MARKERS,
      })

      function animate() {
        if (!isPausedRef.current) phi += speed
        const currentPhi = phi + phiOffsetRef.current + dragOffset.current.phi
        const currentTheta = 0.2 + thetaOffsetRef.current + dragOffset.current.theta
        globe!.update({
          phi: currentPhi,
          theta: currentTheta,
        })
        updateOverlays(currentPhi, currentTheta)
        animationId = requestAnimationFrame(animate)
      }
      animate()
      setTimeout(() => {
        if (canvas) canvas.style.opacity = "1"
      })
    }

    if (canvas.offsetWidth > 0) {
      init()
    } else {
      const ro = new ResizeObserver((entries) => {
        if (entries[0]?.contentRect.width > 0) {
          ro.disconnect()
          init()
        }
      })
      ro.observe(canvas)
    }

    return () => {
      if (animationId!) cancelAnimationFrame(animationId)
      if (globe) globe.destroy()
    }
  }, [speed])

  return (
    <div ref={containerRef} className={`relative aspect-square ${className}`}>
      <canvas
        ref={canvasRef}
        className="h-full w-full cursor-grab touch-none opacity-0 transition-opacity duration-500"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      />
      <canvas
        ref={overlayRef}
        className="absolute inset-0 pointer-events-none"
      />
      {NEEV_MARKERS.map((marker, i) => (
        <div
          key={marker.label}
          ref={(el) => { labelRefs.current[i] = el }}
          className="absolute top-0 left-0 pointer-events-none hidden items-center gap-1"
          style={{ willChange: "transform, opacity" }}
        >
          <span className="text-[10px] font-semibold text-foreground/80 bg-background/60 backdrop-blur-sm rounded px-1.5 py-0.5 whitespace-nowrap border border-border/20 shadow-sm leading-none ml-1">
            {marker.label}
          </span>
        </div>
      ))}
    </div>
  )
}
