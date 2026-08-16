
'use client';
import { useEffect, useRef } from 'react';
import createGlobe from 'cobe';
import { useTheme } from 'next-themes';

export function GlobeBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  useEffect(() => {
    if (!canvasRef.current) return;

    let phi = 0;
    let width = 0;
    const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener('resize', onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: isDark ? 1 : 0,
      diffuse: 1.2,
      mapSamples: 20000,
      mapBrightness: isDark ? 2.5 : 6,
      mapBaseBrightness: isDark ? 0.8 : 0.8,
      baseColor: isDark ? [0.15, 0.15, 0.15] : [1, 1, 1],
      markerColor: [0, 0, 0], // no markers
      glowColor: isDark ? [0.1, 0.1, 0.1] : [0.9, 0.9, 0.9],
      markers: [],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.002;
        state.width = width * 2;
        state.height = width * 2;
      }
    });

    // A small delay to ensure the canvas has been sized correctly
    setTimeout(() => onResize(), 100);

    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, [isDark]);

  return (
    <div className="absolute inset-0 z-0 opacity-20 dark:opacity-30 mix-blend-multiply dark:mix-blend-screen">
      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}
