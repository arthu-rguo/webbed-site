import { CssBaseline } from '@mui/material';
import { Deck } from './component/Deck';
import { CSSProperties } from 'react';

const members = [
  { id: 'sample-card', description: 'sample', url: '' },
  { id: 'sample-card', description: 'sample', url: '' },
  { id: 'sample-card', description: 'sample', url: '' },
  { id: 'sample-card', description: 'sample', url: '' },
  { id: 'sample-card', description: 'sample', url: '' },
  { id: 'sample-card', description: 'sample', url: '' }
];

// The main component.
export function App() {
  const styles = {
    position: 'fixed',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    display: 'flex',
    overflow: 'hidden',
    width: '100vw',
    height: '100vh'
  } as CSSProperties;

  return (
    <div style={styles}>
      <CssBaseline />
      <Deck data={members} />
    </div>
  );
}
