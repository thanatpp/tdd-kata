// source: https://www.codewars.com/kata/5544c7a5cb454edb3c000047/train/typescript
export function bouncingBall(
  h: number,
  bounce: number,
  window: number
): number {
  if (h < 0 || bounce < 0 || bounce >= 1 || window >= h) {
    return -1;
  }

  let bounces = h * bounce;
  let count = 1;
  while (bounces > window) {
    count = count + 2;
    bounces = bounces * bounce;
  }

  return count;
}
