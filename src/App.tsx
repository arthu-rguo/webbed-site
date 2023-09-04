import { CssBaseline, ThemeProvider, createTheme, useMediaQuery } from '@mui/material';
import { useMemo } from 'react';
import Deck from './component/Deck';

// TODO: loading
const data = [
  {
    src: 'https://cdn.discordapp.com/attachments/1015462442391838720/1146618671943405598/image0.gif',
    desc: 'mauzymice'
  },
  {
    src: 'https://cdn.discordapp.com/attachments/1015462442391838720/1146618671943405598/image0.gif',
    desc: 'mauzymice'
  },
  {
    src: 'https://cdn.discordapp.com/attachments/1015462442391838720/1146618671943405598/image0.gif',
    desc: 'mauzymice'
  },
  {
    src: 'https://cdn.discordapp.com/attachments/1015462442391838720/1146618671943405598/image0.gif',
    desc: 'mauzymice'
  },
  {
    src: 'https://cdn.discordapp.com/attachments/1015462442391838720/1146618671943405598/image0.gif',
    desc: 'mauzymice'
  }
];

export default function App() {
  const prefersDarkTheme = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkTheme ? 'dark' : 'light'
        }
      }),
    [prefersDarkTheme]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Deck data={data} />
    </ThemeProvider>
  );
}
