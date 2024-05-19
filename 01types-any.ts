let obj: any = { x: 0 };
console.log(obj);
console.log(typeof obj);
console.log(obj.x);

// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
// obj.foo();
// obj();
obj.bar = 100;
console.log(obj);
console.log(typeof obj);
console.log(obj.bar);

obj = "hello";
console.log(obj);
console.log(typeof obj);

// obj will convert number to a string
const n: number = obj;
console.log(n);
console.log(typeof n);