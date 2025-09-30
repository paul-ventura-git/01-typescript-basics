let obj: any = { x: 0 };
console.log(obj);
console.log(typeof obj);
console.log(obj.x);
console.log("********************************");
// None of the following lines of code will throw compiler errors.
// Using `type any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.

obj.bar = 100;
console.log(obj);
console.log(typeof obj);
console.log(obj.bar);
console.log("********************************");
// obj will be converted to a string
obj = "hello";
console.log(obj);
console.log(typeof obj);
console.log("********************************");
// obj (that is now a string) will convert number to a string
const n: number = obj;
console.log(n);
console.log(typeof n);

