import { CSSProperties, useRef } from 'react';
import { CARD_HEIGHT, clamp, rotate, useMouseWheel } from '../utils';
import { motion } from 'framer-motion';
import { Card } from './Card';

const def = {
  center: { x: -750, y: 0 },
  offsets: { x: 500, y: -0.5 * CARD_HEIGHT },
  angle: 25,
  hover: { x: 50, y: 0 },
  shadow: {
    offsets: { x: 20, y: 10 },
    blur: 10,
    color: '#00000040'
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
  const rotation = useRef(0);
  const div = useRef<HTMLDivElement | null>(null);

  const totalAngle = def.angle * (1 - data.length);

  // Rotate the deck on scroll, avoiding re-renders by directly manipulating the DOM.
  useMouseWheel((dy) => {
    // Update the rotation and recalculate the shadow offsets.
    rotation.current = clamp(rotation.current - 2 * dy, totalAngle, 0);
    const { x: fx, y: fy } = rotate(def.shadow.offsets, -1 * rotation.current);

    if (div.current) {
      div.current.style.transform = `translate(${def.center.x}px, ${def.center.y}px) rotate(${rotation.current}deg)`;
      div.current.style.filter = `drop-shadow(${fx}px ${fy}px ${def.shadow.blur}px ${def.shadow.color})`;
    }
  }, 0.01);

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
  const styles = {
    position: 'relative',
    transition: `transform 0.01s linear`,
    transform: `translate(${def.center.x}px, ${def.center.y}px) rotate(${rotation.current}deg)`,
    filter: `drop-shadow(${def.shadow.offsets.x}px ${def.shadow.offsets.y}px ${def.shadow.blur}px ${def.shadow.color})`
  } as CSSProperties;

  return (
    <div ref={div} style={styles}>
      {cards}
    </div>
  );
}
