export function circle(t: number) {
  return 1 - Math.sqrt(1 - Math.pow(t, 2));
}

export function lerp(from: number, to: number, t: number) {
  return from + t * (to - from);
}

export function rotate(vector: { x: number; y: number }, r: number) {
  const radians = (r * Math.PI) / 180;
  return {
    x: vector.x * Math.cos(radians) - vector.y * Math.sin(radians),
    y: vector.x * Math.sin(radians) + vector.y * Math.cos(radians)
  };
}
