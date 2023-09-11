import { CSSProperties as CSS, useState } from 'react';
import { Card } from './Card';
import { CARD_HEIGHT, clamp, rotate, useMouseWheel } from '../utils';
import { motion } from 'framer-motion';

const css: CSS = {
  position: 'relative',
  transition: `transform 0.025s linear`
} as const;

const defs = {
  offsets: { x: 500, y: (-1 * CARD_HEIGHT) / 2 },
  angle: 24,
  hover: { x: 25, y: 0 },
  shadow: {
    offsets: { x: 10, y: 10 },
    blur: 10,
    color: '#00000080'
  }
} as const;

type Properties = {
  layout: {
    x: number;
  };
  data: {
    id: string;
    desc: string;
  }[];
};

// A component that renders a circular deck of cards that move on scroll and hover.
export function Deck({ layout, data }: Properties) {
  const [rotation, setRotation] = useState(0);
  const angle = 0.5 * defs.angle * (data.length - 1);
  const cards = [];

  // Rotate the deck on scroll.
  useMouseWheel((e) => {
    setRotation((r) => clamp(r + 0.05 * e.deltaY, -angle, angle));
  }, 0.025);

  // Generate a card for each data element.
  for (let i = 0, r = angle; i < data.length; i++, r -= defs.angle) {
    const { x, y } = rotate(defs.offsets, r);
    const whileHover = {
      get transform() {
        const { x, y } = rotate(defs.hover, r);
        return `translate(${x}px, ${y}px)`;
      }
    };
    cards.push(
      <motion.div whileHover={whileHover}>
        <Card key={data[i].id} layout={{ x, y, r }} data={data[i]} />
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
  } as const;

  return <div style={modified}>{cards}</div>;
}
