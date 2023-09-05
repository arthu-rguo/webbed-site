export const cfg = {
  card: {
    width: 350,
    height: 200,
    boxShadow: { x: 2, y: 2 },
    whileHover: { x: 50, y: 75 },
    get corners() {
      return [
        { x: 0, y: 0 },
        { x: cfg.card.width, y: 0 },
        { x: 0, y: cfg.card.height * -1 },
        { x: cfg.card.width, y: cfg.card.height * -1 }
      ];
    }
  },
  deck: {
    top: { x: 0, y: 50, r: 250, scale: 1.1 },
    bottom: { x: 300, y: 0, r: 300, scale: 1 }
  }
} as const;
