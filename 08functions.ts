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
function pow(value: number, exponent: number = 10) {
  return value ** exponent;
}