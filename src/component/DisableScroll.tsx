import { CSSProperties as CSS, ReactNode } from 'react';

const css: CSS = {
  position: 'fixed',
  overflow: 'hidden',
  width: '100vw',
  height: '100vh'
} as const;

// A wrapper component that prevents default scroll behaviour including overscroll.
export function DisableScroll({ children }: { children: ReactNode }) {
  return <div style={css}>{children}</div>;
}
