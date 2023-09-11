import { CssBaseline, SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import { CSSProperties as CSS } from 'react';
import { Deck } from './component/Deck';
import { DisableScroll } from './component/DisableScroll';

const members = [
  { id: 'sample-card', desc: 'sample' },
  { id: 'sample-card', desc: 'sample' },
  { id: 'sample-card', desc: 'sample' },
  { id: 'sample-card', desc: 'sample' },
  { id: 'sample-card', desc: 'sample' },
  { id: 'sample-card', desc: 'sample' }
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
        <SpeedDial icon={<SpeedDialIcon />} ariaLabel={'button'} sx={css.fab}>
          <SpeedDialAction />
        </SpeedDial>
      </div>
    </DisableScroll>
  );
}
