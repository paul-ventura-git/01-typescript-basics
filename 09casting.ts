let x: unknown = 'hello';
console.log((x as string).length);

//Using <> works the same as casting with as.
let a: unknown = 'hello';
console.log((<string>a).length);

//To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type.

let b = 5;
console.log(((b as unknown) as string).length); // x is not actually a number so this will return undefined