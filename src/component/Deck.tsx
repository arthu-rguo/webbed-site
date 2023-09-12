import { CSSProperties as CSS, useState } from 'react';
import { CARD_HEIGHT, clamp, rotate, useMouseWheel } from '../utils';
import { motion } from 'framer-motion';
import { Card } from './Card';

const css: CSS = {
  position: 'relative',
  transition: `transform 0.01s linear`
} as const;

const defs = {
  offsets: { x: 500, y: -0.5 * CARD_HEIGHT },
  angle: 24,
  hover: { x: 50, y: 0 },
  shadow: {
    offsets: { x: 10, y: 10 },
    blur: 5,
    color: '#00000080'
  },
  tickRate: 0.01
} as const;

type Properties = {
  layout: {
    x: number;
  };
  data: {
    id: string;
    description: string;
    url: string;
  }[];
};

// A component that renders a circular deck of cards that move on scroll and hover.
export function Deck({ layout, data }: Properties) {
  const [rotation, setRotation] = useState(0);

  // Rotate the deck on scroll.
  const totalAngle = defs.angle * (1 - data.length);
  useMouseWheel((dy) => {
    setRotation((r) => clamp(r - 2 * dy * defs.tickRate, totalAngle, 0));
  }, defs.tickRate);

  // Generate a card for each data element.
  const cards = [];
  for (let i = 0, r = 0; i < data.length; i++, r = i * defs.angle) {
    const whileHover = {
      get transform() {
        const { x, y } = rotate(defs.hover, r);
        return `translate(${x}px, ${y}px)`;
      }
    };

    cards.push(
      <motion.div key={i} whileHover={whileHover}>
        <Card layout={{ ...rotate(defs.offsets, r), r }} data={data[i]} />
      </motion.div>
    );
  }

  // Extend the default styles with the given properties.
  const modified: CSS = {
    ...css,
    transform: `translate(${layout.x}px, 0px) rotate(${rotation}deg)`,
    // Compensate for the rotation of the deck when applying the drop shadow.
    get filter() {
      const { x, y } = rotate(defs.shadow.offsets, -rotation);
      return `drop-shadow(${x}px ${y}px ${defs.shadow.blur}px ${defs.shadow.color})`;
    }
  };

  return <div style={modified}>{cards}</div>;
}
