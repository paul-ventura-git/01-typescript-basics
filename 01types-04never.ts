// The never type represents the type of values that never occur.
// It's used to indicate that something never happens or should never happen.
/*
Common use cases for never:

Functions that never return (always throw an error or enter an infinite loop)
Type guards that never pass type checking
Exhaustiveness checking in discriminated unions
*/

function throwError(message: string): never {
  throw new Error(message);
}

type Circle = {
  kind: 'circle';
  radius: number;
};

type Square = {
  kind: 'square';
  sideLength: number;
};

type Triangle = {
  kind: 'triangle';
  base: number;
  height: number;
};

type Shape = Circle | Square | Triangle;

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.sideLength ** 2;
    case 'triangle':
      return (shape.base * shape.height) / 2;
    default:
      // TypeScript knows this should never happen
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

//let x: never = true; // Error: Type 'boolean' is not assignable to type 'never'.
