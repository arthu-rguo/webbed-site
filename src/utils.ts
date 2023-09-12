import { useEffect } from 'react';

export const CARD_WIDTH = 350;
export const CARD_HEIGHT = 200;

// Returns x clamped to the range [min, max].
export function clamp(x: number, min: number, max: number) {
  return Math.min(Math.max(x, min), max);
}

// Returns the path to an image or thumbnail with the name id.
export function image(id: string, xs = false) {
  return `/images/${id}${xs ? '-xs' : ''}.png`;
}

// Navigates to the URL and opens it in a new tab.
export function navigate(url: string) {
  window.open(url, '_blank');
}

// Returns the vector (x, y) rotated by r degrees.
export function rotate({ x, y }: { x: number; y: number }, r: number) {
  const radians = (Math.PI * r) / 180;
  return {
    x: x * Math.cos(radians) - y * Math.sin(radians),
    y: x * Math.sin(radians) + y * Math.cos(radians)
  };
}

// A custom hook that fires when the mouse wheel is scrolled.
export function useMouseWheel(onMouseWheel: (dy: number) => void, t = 0) {
  useEffect(() => {
    let id: unknown = null;

    // Avoid choking the app by firing at most once every t seconds.
    const listener = (e: WheelEvent) => {
      id =
        id ||
        setTimeout(() => {
          onMouseWheel(e.deltaY);
          id = null;
        }, t * 1000);
    };

    window.addEventListener('wheel', listener, { passive: true });
    return () => window.removeEventListener('wheel', listener);
  }, []);
}
