import { motion } from 'framer-motion';
import { CSSProperties as CSS } from 'react';
import { cfg } from '../config';
import { rotate } from '../utils';

const css: { card: CSS; content: CSS } = {
  card: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: '10px',
    transformOrigin: 'bottom left',
    width: `${cfg.card.width}px`,
    height: `${cfg.card.height}px`
  },
  content: {
    width: '100%',
    objectFit: 'cover'
  }
};

type Properties = {
  x: number;
  y: number;
  r: number;
  scale: number;
  src: string;
  desc: string;
};

export default function Card({ x, y, r, scale, src, desc }: Properties) {
  const boxShadow = rotate(cfg.card.boxShadow, r * -1);
  const whileHover = rotate(cfg.card.whileHover, r);

  const card: CSS = {
    ...css.card,
    inset: `${y}px ${x}px`,
    transform: `rotate(${r}deg) scale(${scale})`,
    boxShadow: `rgba(0, 0, 0, 0.1) ${boxShadow.x}px ${boxShadow.y}px 10px`
  };

  const animate = {
    inset: `${y + whileHover.y * scale}px ${x + whileHover.x * scale}px`
  };

  return (
    <motion.div whileHover={animate} style={card}>
      <img src={src} alt={desc} draggable={'false'} style={css.content} />
    </motion.div>
  );
}
