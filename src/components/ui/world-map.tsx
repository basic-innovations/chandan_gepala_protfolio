
"use client";
import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { useTheme } from "next-themes";

export interface WorldMapProps {
  locations: { title: string; lat: number; long: number }[];
  className?: string;
  globeColor?: string;
  markerColor?: string;
  glowColor?: string;
}

export function WorldMap({
  locations,
  className,
  globeColor = "hsl(222.2 84% 4.9%)",
  markerColor = "hsl(25 95% 53%)",
  glowColor = "hsl(222.2 84% 4.9%)",
}: WorldMapProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    let phi = 0;
    let width = 0;
    const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener('resize', onResize);
    onResize();

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: theme === 'dark' ? 1 : 0,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: theme === 'dark' ? [0.3, 0.3, 0.3] : [1, 1, 1],
      markerColor: hexToRgb(markerColor),
      glowColor: theme === 'dark' ? [0.5, 0.5, 0.5] : [0.9, 0.9, 0.9],
      markers: locations.map(loc => ({
        location: [loc.lat, loc.long],
        size: 0.03 + Math.random() * 0.03,
      })),
      onRender: (state) => {
        state.phi = phi;
        phi += 0.005;
        state.width = width * 2
        state.height = width * 2

        // Animate marker size
        if (state.markers) {
            state.markers.forEach((marker: {size: number}, i: number) => {
                marker.size = 0.03 + 0.02 * Math.sin(phi * 2 + i);
            });
        }
      }
    });

    setTimeout(() => onResize());

    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    }
  }, [locations, theme, markerColor]);

  return (
    <div
      className={className}
    >
      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: '100%', aspectRatio: '1 / 1' }}
      />
    </div>
  );
}

const hexToRgb = (hex: string): [number, number, number] => {
  if (hex.startsWith('hsl')) {
    const hslMatch = hex.match(/hsl\(\s*([\d\.]+)\s*([\d\.]+)%\s*([\d\.]+)%\s*\)/);
    if (!hslMatch) {
      // fallback for safety
      return [0,0,0];
    }
    const [,h, s, l] = hslMatch.map(Number);
    const [r,g,b] = hslToRgb(h, s, l);
    return [r/255, g/255, b/255];
  }
  let c: any;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");
    return [(c >> 16) & 255, (c >> 8) & 255, c & 255];
  }
  throw new Error("Bad Hex");
};

function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  h /= 360;
  s /= 100;
  l /= 100;
  let r, g, b;
  if (s == 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return [r * 255, g * 255, b * 255];
}
