import { CssBaseline } from '@mui/material';
import { Deck } from './component/Deck';
import { CSSProperties as CSS } from 'react';

const members = [
  { id: 'sample-card', description: 'sample', url: '' },
  { id: 'sample-card', description: 'sample', url: '' },
  { id: 'sample-card', description: 'sample', url: '' },
  { id: 'sample-card', description: 'sample', url: '' },
  { id: 'sample-card', description: 'sample', url: '' },
  { id: 'sample-card', description: 'sample', url: '' }
];

const css: { container: CSS } = {
  container: {
    position: 'fixed',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    display: 'flex',
    overflow: 'hidden',
    width: '100vw',
    height: '100vh'
  }
};

// The main component.
export function App() {
  return (
    <div style={css.container}>
      <CssBaseline />
      <Deck data={members} />
    </div>
  );
}
