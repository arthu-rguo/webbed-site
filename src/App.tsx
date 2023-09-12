import { CssBaseline } from '@mui/material';
import { CSSProperties as CSS } from 'react';
import { Deck } from './component/Deck';
import { DisableScroll } from './component/DisableScroll';

const members = [
  { id: 'sample-card', description: 'sample', url: '' },
  { id: 'sample-card', description: 'sample', url: '' },
  { id: 'sample-card', description: 'sample', url: '' },
  { id: 'sample-card', description: 'sample', url: '' },
  { id: 'sample-card', description: 'sample', url: '' },
  { id: 'sample-card', description: 'sample', url: '' }
];

const css: { div: CSS; fab: CSS } = {
  div: {
    display: 'flex',
    alignItems: 'center',
    height: '100%'
  },
  fab: {
    position: 'absolute',
    inset: 'auto 25px 25px auto'
  }
} as const;

const defs = {
  offset: -300
} as const;

// The main component.
export function App() {
  return (
    <DisableScroll>
      <CssBaseline />
      <div style={css.div}>
        <Deck layout={{ x: defs.offset }} data={members} />
      </div>
    </DisableScroll>
  );
}
