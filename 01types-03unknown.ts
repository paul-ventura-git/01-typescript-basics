// unknown is a similar, but safer alternative to any.
let w: unknown = 1;
console.log(w);
console.log(typeof w);
console.log("***************************************************************01");
//const m: number = w; // Error: Type 'unknown' is not assignable to type 'number'.
const m: number = w as number; // Type assertion (casting)

w = "Esto es una cadena"; // no error
console.log(w);
console.log(typeof w);
console.log("***************************************************************02");

// const n: number = w; // Error: Type 'string' is not assignable to type 'number'.

w = {
  runANonExistentMethod: () => {
    console.log("I think therefore I am");
  }
} as { runANonExistentMethod: () => void}
console.log(w);
console.log(typeof w);

// How can we avoid the error for the code commented out below when we don't know the type?
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'.
if(typeof w === 'object' && w !== null) {
  (w as { runANonExistentMethod: Function }).runANonExistentMethod();
}
console.log("***************************************************************03");
console.log(w as { runANonExistentMethod: Function })
console.log(typeof (w as { runANonExistentMethod: Function }))
// Although we have to cast multiple times we can do a check in the "if" to secure our type and have a safer casting