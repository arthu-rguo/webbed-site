import { motion } from 'framer-motion';
import { CSSProperties as CSS, useState } from 'react';
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
    height: `${cfg.card.height}px`,
    backgroundSize: 'cover'
  },
  content: {
    width: '100%',
    objectFit: 'cover',
    transition: 'opacity 0.25s'
  }
};

type Properties = {
  layout: {
    x: number;
    y: number;
    r: number;
    scale: number;
  };
  data: {
    id: string;
    desc: string;
  };
};

export function Card({ layout, data }: Properties) {
  const [loading, setLoading] = useState(true);

  const boxShadow = rotate(cfg.card.boxShadow, layout.r * -1);
  const whileHover = rotate(cfg.card.whileHover, layout.r);

  const modified: { card: CSS; content: CSS } = {
    card: {
      ...css.card,
      inset: `${layout.y}px ${layout.x}px`,
      transform: `rotate(${layout.r}deg) scale(${layout.scale})`,
      boxShadow: `rgba(0, 0, 0, 0.25) ${boxShadow.x}px ${boxShadow.y}px 5px`,
      backgroundImage: `url(/images/${data.id}-xs.png)`
    },
    content: {
      ...css.content,
      opacity: `${loading ? '0' : '100'}`
    }
  };

  const animate = {
    inset: `${layout.y + whileHover.y * layout.scale}px ${layout.x + whileHover.x * layout.scale}px`
  };

  return (
    <motion.div whileHover={animate} style={modified.card}>
      <img
        src={`/images/${data.id}.png`}
        alt={data.desc}
        onLoad={() => setLoading(false)}
        draggable={'false'}
        style={modified.content}
      />
    </motion.div>
  );
}
