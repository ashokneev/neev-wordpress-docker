"use client";

import { cn } from "@/lib/utils";
import { useRef, useEffect, useCallback } from "react";

interface MarkerDef {
  lat: number;
  lng: number;
  label?: string;
  labelOffset?: [number, number]; // [dx, dy] pixel offset for label
}

interface ConnectionDef {
  from: [number, number];
  to: [number, number];
  altitude: number;
  primary?: boolean;
}

interface GlobeProps {
  className?: string;
  size?: number;
  dotColor?: string;
  arcColor?: string;
  markerColor?: string;
  autoRotateSpeed?: number;
  connections?: ConnectionDef[];
  markers?: MarkerDef[];
}

const DEFAULT_MARKERS: MarkerDef[] = [
  { lat: 17.4, lng: 78.5, label: "Hyderabad, India", labelOffset: [10, -8] },
  { lat: 37, lng: -122, label: "Milpitas, CA (HQ)", labelOffset: [10, 4] },
  { lat: 32, lng: -115, label: "Menlo Park, CA", labelOffset: [10, 14] },
  { lat: 42, lng: -128, label: "Palo Alto, CA", labelOffset: [-90, -6] },
  { lat: 27, lng: -118, label: "Fremont, CA", labelOffset: [10, 16] },
  { lat: 50, lng: -130, label: "Seattle, WA", labelOffset: [10, -6] },
];

const DEFAULT_CONNECTIONS: ConnectionDef[] = [
  { from: [17.4, 78.5], to: [37, -122], altitude: 0.2, primary: true },
  { from: [37, -122], to: [32, -115], altitude: 0.2 },
  { from: [37, -122], to: [42, -128], altitude: 0.2 },
  { from: [37, -122], to: [27, -118], altitude: 0.2 },
  { from: [37, -122], to: [50, -130], altitude: 0.2 },
];

function latLngToXYZ(lat: number, lng: number, radius: number): [number, number, number] {
  const phi = ((90 - lat) * Math.PI) / 180;
  const theta = ((lng + 180) * Math.PI) / 180;
  return [
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  ];
}

function rotateY(x: number, y: number, z: number, angle: number): [number, number, number] {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return [x * cos + z * sin, y, -x * sin + z * cos];
}

function rotateX(x: number, y: number, z: number, angle: number): [number, number, number] {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return [x, y * cos - z * sin, y * sin + z * cos];
}

function project(x: number, y: number, z: number, cx: number, cy: number, fov: number): [number, number, number] {
  const scale = fov / (fov + z);
  return [x * scale + cx, y * scale + cy, z];
}

function normalize(v: [number, number, number]): [number, number, number] {
  const len = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
  return [v[0] / len, v[1] / len, v[2] / len];
}

function slerp(a: [number, number, number], b: [number, number, number], t: number): [number, number, number] {
  const dot = Math.max(-1, Math.min(1, a[0] * b[0] + a[1] * b[1] + a[2] * b[2]));
  const omega = Math.acos(dot);
  if (omega < 0.001) return [a[0] * (1 - t) + b[0] * t, a[1] * (1 - t) + b[1] * t, a[2] * (1 - t) + b[2] * t];
  const sinO = Math.sin(omega);
  const fa = Math.sin((1 - t) * omega) / sinO;
  const fb = Math.sin(t * omega) / sinO;
  return [a[0] * fa + b[0] * fb, a[1] * fa + b[1] * fb, a[2] * fa + b[2] * fb];
}

const ARC_SEGMENTS = 48;

export function InteractiveGlobe({
  className,
  size = 600,
  dotColor = "hsla(226, 60%, 55%, ALPHA)",
  arcColor = "hsla(195, 80%, 55%, 0.5)",
  markerColor = "hsla(195, 90%, 60%, 1)",
  autoRotateSpeed = 0.002,
  connections = DEFAULT_CONNECTIONS,
  markers = DEFAULT_MARKERS,
}: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rotYRef = useRef(3.5);
  const rotXRef = useRef(0.25);
  const dragRef = useRef<{ active: boolean; startX: number; startY: number; startRotY: number; startRotX: number }>({
    active: false, startX: 0, startY: 0, startRotY: 0, startRotX: 0,
  });
  const animRef = useRef(0);
  const timeRef = useRef(0);
  const dotsRef = useRef<[number, number, number][]>([]);

  useEffect(() => {
    const dots: [number, number, number][] = [];
    const numDots = 1200;
    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    for (let i = 0; i < numDots; i++) {
      const theta = (2 * Math.PI * i) / goldenRatio;
      const phi = Math.acos(1 - (2 * (i + 0.5)) / numDots);
      dots.push([Math.cos(theta) * Math.sin(phi), Math.cos(phi), Math.sin(theta) * Math.sin(phi)]);
    }
    dotsRef.current = dots;
  }, []);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    const cx = w / 2;
    const cy = h / 2;
    const radius = Math.min(w, h) * 0.38;
    const fov = 600;

    if (!dragRef.current.active) rotYRef.current += autoRotateSpeed;
    timeRef.current += 0.015;
    const time = timeRef.current;

    ctx.clearRect(0, 0, w, h);

    // Outer glow
    const glowGrad = ctx.createRadialGradient(cx, cy, radius * 0.8, cx, cy, radius * 1.5);
    glowGrad.addColorStop(0, "hsla(226, 60%, 35%, 0.05)");
    glowGrad.addColorStop(1, "hsla(226, 60%, 35%, 0)");
    ctx.fillStyle = glowGrad;
    ctx.fillRect(0, 0, w, h);

    // Globe outline
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.strokeStyle = "hsla(226, 60%, 35%, 0.08)";
    ctx.lineWidth = 1;
    ctx.stroke();

    const ry = rotYRef.current;
    const rx = rotXRef.current;

    // Dots
    for (const dot of dotsRef.current) {
      let [x, y, z] = [dot[0] * radius, dot[1] * radius, dot[2] * radius];
      [x, y, z] = rotateX(x, y, z, rx);
      [x, y, z] = rotateY(x, y, z, ry);
      if (z > 0) continue;
      const [sx, sy] = project(x, y, z, cx, cy, fov);
      const depthAlpha = Math.max(0.1, 1 - (z + radius) / (2 * radius));
      ctx.beginPath();
      ctx.arc(sx, sy, 1 + depthAlpha * 0.8, 0, Math.PI * 2);
      ctx.fillStyle = dotColor.replace("ALPHA", depthAlpha.toFixed(2));
      ctx.fill();
    }

    // Arcs via slerp
    for (const conn of connections) {
      const [lat1, lng1] = conn.from;
      const [lat2, lng2] = conn.to;
      const altitude = conn.altitude;
      const isPrimary = conn.primary === true;

      const from3D = latLngToXYZ(lat1, lng1, radius);
      const to3D = latLngToXYZ(lat2, lng2, radius);
      const unitA = normalize([from3D[0] / radius, from3D[1] / radius, from3D[2] / radius]);
      const unitB = normalize([to3D[0] / radius, to3D[1] / radius, to3D[2] / radius]);

      const arcPoints: { sx: number; sy: number; rz: number }[] = [];
      let anyVisible = false;

      for (let i = 0; i <= ARC_SEGMENTS; i++) {
        const t = i / ARC_SEGMENTS;
        const interp = slerp(unitA, unitB, t);
        const lift = 1 + altitude * Math.sin(t * Math.PI);
        const px = interp[0] * radius * lift;
        const py = interp[1] * radius * lift;
        const pz = interp[2] * radius * lift;
        let [rx2, ry2, rz2] = rotateX(px, py, pz, rx);
        [rx2, ry2, rz2] = rotateY(rx2, ry2, rz2, ry);
        if (rz2 < 0) anyVisible = true;
        const [sx, sy] = project(rx2, ry2, rz2, cx, cy, fov);
        arcPoints.push({ sx, sy, rz: rz2 });
      }

      if (!anyVisible) continue;

      // Draw visible segments
      ctx.beginPath();
      let drawing = false;
      for (let i = 0; i <= ARC_SEGMENTS; i++) {
        const pt = arcPoints[i];
        if (pt.rz < 0) {
          if (!drawing) { ctx.moveTo(pt.sx, pt.sy); drawing = true; }
          else ctx.lineTo(pt.sx, pt.sy);
        } else {
          drawing = false;
        }
      }

      if (isPrimary) {
        // Gradient stroke for primary arc
        const firstVisible = arcPoints.find(p => p.rz < 0);
        const lastVisible = [...arcPoints].reverse().find(p => p.rz < 0);
        if (firstVisible && lastVisible) {
          const grad = ctx.createLinearGradient(firstVisible.sx, firstVisible.sy, lastVisible.sx, lastVisible.sy);
          grad.addColorStop(0, "hsla(180, 80%, 55%, 0.9)");
          grad.addColorStop(1, "hsla(270, 70%, 60%, 0.9)");
          ctx.strokeStyle = grad;
        } else {
          ctx.strokeStyle = "hsla(195, 80%, 55%, 0.8)";
        }
        ctx.lineWidth = 2.5;
      } else {
        ctx.strokeStyle = arcColor;
        ctx.lineWidth = 1.2;
      }
      ctx.stroke();

      // Traveling dot
      const tDot = ((Math.sin(time * 1.2 + lat1 * 0.05) + 1) / 2);
      const dotIdx = Math.min(Math.floor(tDot * ARC_SEGMENTS), ARC_SEGMENTS);
      const dotPt = arcPoints[dotIdx];
      if (dotPt.rz < 0) {
        ctx.beginPath();
        ctx.arc(dotPt.sx, dotPt.sy, isPrimary ? 3 : 2, 0, Math.PI * 2);
        ctx.fillStyle = isPrimary ? "hsla(180, 90%, 65%, 1)" : markerColor;
        ctx.fill();
      }
    }

    // Markers
    for (const marker of markers) {
      let [x, y, z] = latLngToXYZ(marker.lat, marker.lng, radius);
      [x, y, z] = rotateX(x, y, z, rx);
      [x, y, z] = rotateY(x, y, z, ry);
      if (z > radius * 0.1) continue;
      const [sx, sy] = project(x, y, z, cx, cy, fov);

      const pulse = Math.sin(time * 2 + marker.lat) * 0.5 + 0.5;
      ctx.beginPath();
      ctx.arc(sx, sy, 4 + pulse * 4, 0, Math.PI * 2);
      ctx.strokeStyle = `hsla(195, 90%, 60%, ${(0.2 + pulse * 0.15).toFixed(2)})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(sx, sy, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = markerColor;
      ctx.fill();

      if (marker.label) {
        const [dx, dy] = marker.labelOffset || [10, 3];
        ctx.font = "bold 11px system-ui, sans-serif";
        ctx.fillStyle = "hsla(195, 80%, 65%, 0.75)";
        ctx.fillText(marker.label, sx + dx, sy + dy);
      }
    }

    animRef.current = requestAnimationFrame(draw);
  }, [dotColor, arcColor, markerColor, autoRotateSpeed, connections, markers]);

  useEffect(() => {
    animRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animRef.current);
  }, [draw]);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    dragRef.current = { active: true, startX: e.clientX, startY: e.clientY, startRotY: rotYRef.current, startRotX: rotXRef.current };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragRef.current.active) return;
    rotYRef.current = dragRef.current.startRotY + (e.clientX - dragRef.current.startX) * 0.005;
    rotXRef.current = Math.max(-1, Math.min(1, dragRef.current.startRotX + (e.clientY - dragRef.current.startY) * 0.005));
  }, []);

  const onPointerUp = useCallback(() => { dragRef.current.active = false; }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn("cursor-grab active:cursor-grabbing touch-none", className)}
      style={{ width: size, height: size }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    />
  );
}
