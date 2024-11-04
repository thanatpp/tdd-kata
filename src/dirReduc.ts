/* 
 https://www.codewars.com/kata/550f22f4d758534c1100025a/train/typescript
*/
export function dirReduc(arr: string[]): string[] {
  const stack: string[] = [];
  for (const dir of arr) {
    stack[stack.length - 1] === getOppositeDir(dir)
      ? stack.pop()
      : stack.push(dir);
  }
  return stack;
}

function getOppositeDir(dir: String) {
  switch (dir) {
    case "NORTH":
      return "SOUTH";
    case "SOUTH":
      return "NORTH";
    case "EAST":
      return "WEST";
    default:
      return "EAST";
  }
}
