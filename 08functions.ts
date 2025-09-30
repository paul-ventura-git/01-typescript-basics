console.log("01. Return type (tipos de retorno)");
// the `: number` here specifies that this function returns a number
function getTime(): number {
  return new Date().getTime();
}

console.log(getTime());

console.log("02. Void return type");
function printHello(): void {
  console.log('Hello!');
}

console.log(printHello());

console.log("03. Parameters");
function multiply(a: number, b: number) {
  return a * b;
}

console.log(multiply(2, 4));

console.log("04. Optional parameters")
// the `?` operator here marks parameter `c` as optional
function add(a: number, b: number, c?: number) {
  return a + b + (c || 0);
}

console.log(add(528, 788));

console.log("05. Default parameters")
// TypeScript can also infer the type from the default value.
function pow(value: number, exponent: number = 10) {
  return value ** exponent;
}

console.log(pow(2));

console.log("06. Named parameters")
function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
  return dividend / divisor;
}

console.log(divide({ dividend: 10, divisor: 2 }));

console.log("07. Rest parameters")
function add_2(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((p, c) => p + c, 0);
}

console.log(add_2(1, 2, 3, 4, 5));

console.log("08. Type aliases")
type Negate = (value: number) => number;

// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction: Negate = (value) => value * -1;

console.log("09. Union Types in parameters");
function formatCommandline(command: string[] | string) {
  let line = '';  
  if (typeof command === 'string') {
    line = command.trim();
  } else {
    line = command.join(' ').trim();
  }
  return line;
}

console.log(formatCommandline('   hello   '));
console.log(formatCommandline(['hello', 'world']));