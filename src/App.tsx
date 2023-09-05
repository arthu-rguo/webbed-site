import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Deck } from './component/Deck';

const members = [
  { id: 'sample-card', desc: 'sample' },
  { id: 'sample-card', desc: 'sample' },
  { id: 'sample-card', desc: 'sample' },
  { id: 'sample-card', desc: 'sample' },
  { id: 'sample-card', desc: 'sample' }
];

export function App() {
  return (
    <ThemeProvider theme={createTheme({ palette: { mode: 'dark' } })}>
      <CssBaseline />
      <Deck data={members} />
    </ThemeProvider>
  );
}
