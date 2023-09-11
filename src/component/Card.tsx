import { CSSProperties as CSS, useState } from 'react';
import { CARD_HEIGHT, CARD_WIDTH, image } from '../utils';

const css: { div: CSS; img: CSS } = {
  div: {
    position: 'absolute',
    transformOrigin: 'top left',
    borderRadius: '10px',
    width: `${CARD_WIDTH}px`,
    height: `${CARD_HEIGHT}px`,
    backgroundSize: 'cover'
  },
  img: {
    width: '100%',
    objectFit: 'cover',
    transition: 'opacity 0.25s'
  }
} as const;

type Properties = {
  layout: {
    x: number;
    y: number;
    r: number;
  };
  data: {
    id: string;
    desc: string;
  };
};

// A component that renders a clickable card that loads and displays an image.
export function Card({ layout, data }: Properties) {
  const [loading, setLoading] = useState(true);

  // Extend the default styles with the given properties.
  const modified: { div: CSS; img: CSS } = {
    div: {
      ...css.div,
      transform: `translate(${layout.x}px, ${layout.y}px) rotate(${layout.r}deg)`,
      backgroundImage: `url(${image(data.id, true)})`
    },
    img: {
      ...css.img,
      opacity: `${loading ? '0' : '100'}`
    }
  };

  return (
    <div style={modified.div}>
      <img
        src={image(data.id)}
        alt={data.desc}
        draggable={false}
        onLoad={() => setLoading(false)}
        style={modified.img}
      />
    </div>
  );
}
