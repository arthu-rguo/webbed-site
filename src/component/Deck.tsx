import { CSSProperties, useState } from 'react';
import { CARD_HEIGHT, clamp, rotate, useMouseWheel } from '../utils';
import { motion } from 'framer-motion';
import { Card } from './Card';

const def = {
  center: { x: -500, y: 0 },
  offsets: { x: 500, y: -0.5 * CARD_HEIGHT },
  angle: 24,
  tickRate: 0.01,
  hover: { x: 50, y: 0 },
  shadow: {
    offsets: { x: 10, y: 10 },
    blur: 5,
    color: '#00000080'
  }
} as const;

type Properties = {
  data: {
    id: string;
    description: string;
    url: string;
  }[];
};

// A component that renders a circular deck of cards that move on scroll and hover.
export function Deck({ data }: Properties) {
  const [rotation, setRotation] = useState(0);

  // Rotate the deck on scroll.
  const totalAngle = def.angle * (1 - data.length);
  useMouseWheel((dy) => {
    setRotation((r) => clamp(r - 2 * dy * def.tickRate, totalAngle, 0));
  }, def.tickRate);

  // Generate a card for each data element.
  const cards = [];
  for (let i = 0, r = 0; i < data.length; i++, r = i * def.angle) {
    const { x: tx, y: ty } = rotate(def.hover, r);
    cards.push(
      <motion.div key={i} whileHover={{ transform: `translate(${tx}px, ${ty}px)` }}>
        <Card layout={{ ...rotate(def.offsets, r), r }} data={data[i]} />
      </motion.div>
    );
  }

  // Apply inline styles based on constants and properties.
  const { x: fx, y: fy } = rotate(def.shadow.offsets, -rotation);
  const styles = {
    position: 'relative',
    transition: `transform 0.01s linear`,
    transform: `translate(${def.center.x}px, ${def.center.y}px) rotate(${rotation}deg)`,
    filter: `drop-shadow(${fx}px ${fy}px ${def.shadow.blur}px ${def.shadow.color})`
  } as CSSProperties;

  return <div style={styles}>{cards}</div>;
}
