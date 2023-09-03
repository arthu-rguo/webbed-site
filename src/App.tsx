import Deck from './component/Deck';

// TODO: loading
const data = [
  {
    src: 'https://cdn.discordapp.com/attachments/1015462442391838720/1146618671943405598/image0.gif'
  },
  {
    src: 'https://cdn.discordapp.com/attachments/1015462442391838720/1146618671943405598/image0.gif'
  },
  {
    src: 'https://cdn.discordapp.com/attachments/1015462442391838720/1146618671943405598/image0.gif'
  },
  {
    src: 'https://cdn.discordapp.com/attachments/1015462442391838720/1146618671943405598/image0.gif'
  },
  {
    src: 'https://cdn.discordapp.com/attachments/1015462442391838720/1146618671943405598/image0.gif'
  },
  {
    src: 'https://cdn.discordapp.com/attachments/1015462442391838720/1146618671943405598/image0.gif'
  }
];

export default function App() {
  return data && <Deck data={data} />;
}
