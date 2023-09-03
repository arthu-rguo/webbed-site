import { motion } from 'framer-motion';
import { CSSProperties as CSS } from 'react';
import { circle, lerp } from '../utils';
import Card from './Card';

const css: { deck: CSS } = {
  deck: {
    width: '625px',
    height: '510px',
    background: 'pink'
  }
};

const top = { x: 345, y: 230, r: 250, scale: 1.1 };
const bottom = { x: 445, y: 210, r: 300, scale: 1 };

export default function Deck({ data }: { data: { src: string }[] }) {
  return (
    <motion.div style={css.deck}>
      {data.map((d, i) => {
        const t = i / (data.length - 1);
        return (
          <Card
            key={i}
            x={lerp(bottom.x, top.x, Math.pow(t, 1.1))}
            y={lerp(bottom.y, top.y, circle(t))}
            r={lerp(bottom.r, top.r, t)}
            scale={lerp(bottom.scale, top.scale, t)}
            src={d.src}
          />
        );
      })}
    </motion.div>
  );
}
