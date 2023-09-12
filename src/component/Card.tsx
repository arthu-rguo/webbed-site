import { CSSProperties as CSS, useState } from 'react';
import { CARD_HEIGHT, CARD_WIDTH, image, navigate } from '../utils';

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
    transition: 'opacity 0.1s'
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
    description: string;
    url: string;
  };
};

// A component that renders a clickable card that displays an image.
export function Card({ layout, data }: Properties) {
  const [isReady, setReady] = useState(false);

  // Extend the default styles with the given properties.
  const modified: { div: CSS; img: CSS } = {
    div: {
      ...css.div,
      transform: `translate(${layout.x}px, ${layout.y}px) rotate(${layout.r}deg)`,
      backgroundImage: `url(${image(data.id, true)})`
    },
    img: {
      ...css.img,
      opacity: `${isReady ? '100' : '0'}`
    }
  };

  return (
    <div style={modified.div}>
      <img
        src={image(data.id)}
        alt={data.description}
        draggable={'false'}
        style={modified.img}
        onLoad={() => setReady(true)}
        onClick={() => navigate(data.url)}
      />
    </div>
  );
}
