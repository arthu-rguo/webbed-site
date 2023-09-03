import { motion } from 'framer-motion';
import { CSSProperties as CSS } from 'react';
import { format, rotate } from '../utils';

const css: { card: CSS; content: CSS } = {
  card: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: '10px',
    transformOrigin: 'bottom left',
    width: '350px',
    height: '200px'
  },
  content: {
    width: '100%',
    objectFit: 'cover'
  }
};

const defaultShadow = { x: 2, y: 5 };
const defaultMove = { x: 50, y: 50 };

export default function Card({ x, y, r, scale, src }: { x: number; y: number; r: number; scale: number; src: string }) {
  const shadow = rotate(defaultShadow, -r);
  const card: CSS = {
    ...css.card,
    inset: format('...px ...px', y, x),
    transform: format('rotate(...deg) scale(...)', r, scale),
    boxShadow: format('rgba(0, 0, 0, 0.1) ...px ...px 10px', shadow.x, shadow.y)
  };

  const move = rotate(defaultMove, r);
  const animate = {
    inset: format('...px ...px', y + move.y * scale, x + move.x * scale)
  };

  return (
    <motion.div whileHover={animate} style={card}>
      <img src={src} draggable={'false'} style={css.content} />
    </motion.div>
  );
}
