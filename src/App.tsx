import { CssBaseline, SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import { CSSProperties as CSS } from 'react';
import { Deck } from './component/Deck';

const members = [
  { id: 'sample-card', desc: 'sample' },
  { id: 'sample-card', desc: 'sample' },
  { id: 'sample-card', desc: 'sample' },
  { id: 'sample-card', desc: 'sample' },
  { id: 'sample-card', desc: 'sample' }
];

const css: { body: CSS; fab: CSS } = {
  body: {
    display: 'flex',
    height: '100vh',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center'
  },
  fab: {
    position: 'absolute',
    inset: 'auto 25px 25px auto'
  }
};

export function App() {
  return (
    <div style={css.body}>
      <CssBaseline />
      <Deck data={members} />
      <SpeedDial icon={<SpeedDialIcon />} ariaLabel={'button'} sx={css.fab}>
        <SpeedDialAction />
      </SpeedDial>
    </div>
  );
}
