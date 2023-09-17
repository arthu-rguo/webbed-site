import { CSSProperties, useState } from 'react';
import { CARD_HEIGHT, CARD_WIDTH, image, navigate } from '../utils';

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

  // Apply inline styles based on constants and properties.
  const styles = {
    container: {
      position: 'absolute',
      transform: `translate(${layout.x}px, ${layout.y}px) rotate(${layout.r}deg)`,
      transformOrigin: 'top left',
      borderRadius: '10px',
      width: `${CARD_WIDTH}px`,
      height: `${CARD_HEIGHT}px`,
      backgroundImage: `url(${image(data.id, true)})`,
      backgroundSize: 'cover'
    } as CSSProperties,
    content: {
      opacity: `${isReady ? '100' : '0'}`,
      width: '100%',
      transition: 'opacity 0.1s',
      objectFit: 'cover'
    } as CSSProperties
  };

  return (
    <div style={styles.container}>
      <img
        src={image(data.id)}
        alt={data.description}
        draggable={'false'}
        onLoad={() => setReady(true)}
        onClick={() => navigate(data.url)}
        style={styles.content}
      />
    </div>
  );
}
