// 01. Return type
// the `: number` here specifies that this function returns a number
function getTime(): number {
  return new Date().getTime();
}

// 02. Void return type
function printHello(): void {
  console.log('Hello!');
}

// 03. Parameters
function multiply(a: number, b: number) {
  return a * b;
}

// 04. Optional parameters
// the `?` operator here marks parameter `c` as optional
function add(a: number, b: number, c?: number) {
  return a + b + (c || 0);
}

// 05. Default parameters
// TypeScript can also infer the type from the default value.
function pow(value: number, exponent: number = 10) {
  return value ** exponent;
}

// 06. Named parameters
function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
  return dividend / divisor;
}

// 07. Rest parameters
function add_2(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((p, c) => p + c, 0);
}

// 08. Type aliases
type Negate = (value: number) => number;

// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction: Negate = (value) => value * -1;