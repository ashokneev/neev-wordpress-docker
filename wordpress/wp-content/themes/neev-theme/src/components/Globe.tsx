import { cn } from "@/lib/utils";
import { useRef, useEffect, useCallback } from "react";

interface GlobeProps {
  className?: string;
  size?: number;
}

const MARKERS = [
  { lat: 37.43, lng: -121.9, label: "Milpitas, CA" },
  { lat: 45.0, lng: -130.0, label: "San Francisco, CA" },
  { lat: 55.0, lng: -135.0, label: "Seattle, WA" },
  { lat: 28.0, lng: -110.0, label: "California" },
  { lat: 17.39, lng: 78.49, label: "Hyderabad, India" },
];

const CONNECTIONS: { from: [number, number]; to: [number, number] }[] = [
  { from: [17.39, 78.49], to: [37.43, -121.9] },
  { from: [37.43, -121.9], to: [45.0, -130.0] },
  { from: [37.43, -121.9], to: [55.0, -135.0] },
  { from: [37.43, -121.9], to: [28.0, -110.0] },
];


function latLngToXYZ(lat: number, lng: number, radius: number): [number, number, number] {
  const phi = (90 - lat) * Math.PI / 180;
  const theta = (lng + 180) * Math.PI / 180;
  return [-(radius * Math.sin(phi) * Math.cos(theta)), radius * Math.cos(phi), radius * Math.sin(phi) * Math.sin(theta)];
}

function rotateY(x: number, y: number, z: number, angle: number): [number, number, number] {
  const cos = Math.cos(angle),sin = Math.sin(angle);
  return [x * cos + z * sin, y, -x * sin + z * cos];
}

function rotateX(x: number, y: number, z: number, angle: number): [number, number, number] {
  const cos = Math.cos(angle),sin = Math.sin(angle);
  return [x, y * cos - z * sin, y * sin + z * cos];
}

function project(x: number, y: number, z: number, cx: number, cy: number, fov: number): [number, number] {
  const scale = fov / (fov + z);
  return [x * scale + cx, y * scale + cy];
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

function normalize(v: [number, number, number]): [number, number, number] {
  const len = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
  return [v[0] / len, v[1] / len, v[2] / len];
}

const Globe = ({ className, size = 500 }: GlobeProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rotYRef = useRef(0.4);
  const rotXRef = useRef(0.3);
  const dragRef = useRef({ active: false, startX: 0, startY: 0, startRotY: 0, startRotX: 0 });
  const animRef = useRef(0);
  const timeRef = useRef(0);
  const dotsRef = useRef<[number, number, number][]>([]);

  useEffect(() => {
    const dots: [number, number, number][] = [];
    const numDots = 1200;
    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    for (let i = 0; i < numDots; i++) {
      const theta = 2 * Math.PI * i / goldenRatio;
      const phi = Math.acos(1 - 2 * (i + 0.5) / numDots);
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

    const cx = w / 2,cy = h / 2;
    const radius = Math.min(w, h) * 0.38;
    const fov = 600;

    if (!dragRef.current.active) rotYRef.current += 0.002;
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

    const ry = rotYRef.current,rx = rotXRef.current;

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
      ctx.fillStyle = `hsla(226, 60%, 55%, ${depthAlpha.toFixed(2)})`;
      ctx.fill();
    }

    // Connections (multi-segment arcs over the globe surface)
    const ARC_SEGMENTS = 40;
    for (const conn of CONNECTIONS) {
      const [x1r, y1r, z1r] = latLngToXYZ(conn.from[0], conn.from[1], radius);
      const [x2r, y2r, z2r] = latLngToXYZ(conn.to[0], conn.to[1], radius);
      const unitA = normalize([x1r / radius, y1r / radius, z1r / radius]);
      const unitB = normalize([x2r / radius, y2r / radius, z2r / radius]);

      const arcPoints: { sx: number; sy: number; rz: number }[] = [];
      let anyVisible = false;
      for (let i = 0; i <= ARC_SEGMENTS; i++) {
        const t = i / ARC_SEGMENTS;
        const interp = slerp(unitA, unitB, t);
        const height = 1 + 0.3 * Math.sin(t * Math.PI);
        const px = interp[0] * radius * height;
        const py = interp[1] * radius * height;
        const pz = interp[2] * radius * height;
        let [rx2, ry2, rz2] = rotateX(px, py, pz, rx);
        [rx2, ry2, rz2] = rotateY(rx2, ry2, rz2, ry);
        if (rz2 < 0) anyVisible = true;
        const [sx, sy] = project(rx2, ry2, rz2, cx, cy, fov);
        arcPoints.push({ sx, sy, rz: rz2 });
      }

      if (!anyVisible) continue;

      // Draw only visible segments (rz < 0 means in front)
      ctx.beginPath();
      let drawing = false;
      for (let i = 0; i <= ARC_SEGMENTS; i++) {
        const pt = arcPoints[i];
        if (pt.rz < 0) {
          if (!drawing) {
            ctx.moveTo(pt.sx, pt.sy);
            drawing = true;
          } else {
            ctx.lineTo(pt.sx, pt.sy);
          }
        } else {
          drawing = false;
        }
      }
      ctx.strokeStyle = "hsla(216, 50%, 45%, 0.5)";
      ctx.lineWidth = 1.2;
      ctx.stroke();

      // Animated traveling dot (only when visible)
      const tDot = (Math.sin(time * 1.2) + 1) / 2;
      const dotIdx = Math.floor(tDot * ARC_SEGMENTS);
      const dotPt = arcPoints[Math.min(dotIdx, ARC_SEGMENTS)];
      if (dotPt.rz < 0) {
        ctx.beginPath();
        ctx.arc(dotPt.sx, dotPt.sy, 2, 0, Math.PI * 2);
        ctx.fillStyle = "hsla(216, 80%, 65%, 1)";
        ctx.fill();
      }
    }

    // Markers
    for (const marker of MARKERS) {
      let [x, y, z] = latLngToXYZ(marker.lat, marker.lng, radius);
      [x, y, z] = rotateX(x, y, z, rx);
      [x, y, z] = rotateY(x, y, z, ry);
      if (z > radius * 0.1) continue;
      const [sx, sy] = project(x, y, z, cx, cy, fov);

      const pulse = Math.sin(time * 2 + marker.lat) * 0.5 + 0.5;
      ctx.beginPath();
      ctx.arc(sx, sy, 4 + pulse * 4, 0, Math.PI * 2);
      ctx.strokeStyle = `hsla(216, 80%, 65%, ${0.2 + pulse * 0.15})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(sx, sy, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = "hsla(216, 80%, 65%, 1)";
      ctx.fill();

      if (marker.label) {
        ctx.font = "bold 13px system-ui, sans-serif";
        ctx.fillStyle = "hsla(216, 80%, 65%, 0.6)";
        ctx.fillText(marker.label, sx + 8, sy + 3);
      }
    }

    animRef.current = requestAnimationFrame(draw);
  }, []);

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

  const onPointerUp = useCallback(() => {dragRef.current.active = false;}, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn("cursor-grab active:cursor-grabbing touch-none opacity-100 text-primary", className)}
      style={{ width: size, height: size }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp} />);


};

export default Globe;