import { motion } from 'framer-motion';
import { CSSProperties as CSS } from 'react';
import { cfg } from '../config';
import { circle, lerp, rotate } from '../utils';
import Card from './Card';

const bounds = _generateBounds();

const css: { deck: CSS } = {
  deck: {
    width: `${bounds.maxX - bounds.minX}px`,
    height: `${bounds.maxY - bounds.minY}px`
  }
};

type Properties = {
  data: {
    src: string;
    desc: string;
  }[];
};

export default function Deck({ data }: Properties) {
  const cards: React.JSX.Element[] = [];

  for (let i = 0, t = 0; i < data.length; i++, t = i / (data.length - 1)) {
    cards.push(
      <Card
        key={i}
        x={lerp(cfg.deck.bottom.x, cfg.deck.top.x, Math.pow(t, 1.1)) - bounds.minX}
        y={lerp(cfg.deck.bottom.y, cfg.deck.top.y, circle(t)) - cfg.card.height - bounds.minY}
        r={lerp(cfg.deck.bottom.r, cfg.deck.top.r, t)}
        scale={lerp(cfg.deck.bottom.scale, cfg.deck.top.scale, t)}
        src={data[i].src}
        desc={data[i].desc}
      />
    );
  }

  return <motion.div style={css.deck}>{cards}</motion.div>;
}

function _generateBounds() {
  const corners: { x: number; y: number }[] = [];

  for (let offsets = cfg.card.corners, i = 0; i < offsets.length; i++) {
    const top = rotate(offsets[i], cfg.deck.top.r);
    const bottom = rotate(offsets[i], cfg.deck.bottom.r);

    corners.push(
      {
        x: cfg.deck.top.x + top.x * cfg.deck.top.scale,
        y: cfg.deck.top.y + top.y * cfg.deck.top.scale
      },
      {
        x: cfg.deck.bottom.x + bottom.x * cfg.deck.bottom.scale,
        y: cfg.deck.bottom.y + bottom.y * cfg.deck.bottom.scale
      }
    );
  }

  return {
    minX: Math.min(...corners.map((c) => c.x)),
    minY: Math.min(...corners.map((c) => c.y)),
    maxX: Math.max(...corners.map((c) => c.x)),
    maxY: Math.max(...corners.map((c) => c.y))
  };
}
