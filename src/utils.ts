import { useEffect } from 'react';

export const CARD_WIDTH = 350;
export const CARD_HEIGHT = 200;

// Returns x clamped to the range [min, max].
export function clamp(x: number, min: number, max: number) {
  return Math.min(Math.max(x, min), max);
}

// Returns the vector (x, y) rotated by r degrees.
export function rotate({ x, y }: { x: number; y: number }, r: number) {
  const radians = (r * Math.PI) / 180;
  return {
    x: x * Math.cos(radians) - y * Math.sin(radians),
    y: x * Math.sin(radians) + y * Math.cos(radians)
  };
}

// Returns the path to an image or thumbnail with the name id.
export function image(id: string, xs = false) {
  return `/images/${id}${xs ? '-xs' : ''}.png`;
}

// Fires the callback when the mouse wheel is scrolled no more than once every t seconds.
export function useMouseWheel(callback: (e: WheelEvent) => void, t = 0) {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars -- ??
    let timer = null;
    const handle = (e: WheelEvent) => {
      // Avoid choking the app by firing a thousand times a second.
      timer ??= setTimeout(() => {
        callback(e);
        timer = null;
      }, t / 1000);
    };
    window.addEventListener('wheel', handle, { passive: true });
    return () => window.removeEventListener('wheel', handle);
  }, []);
}
