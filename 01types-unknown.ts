// unknown is a similar, but safer alternative to any.
let w: unknown = 1;
console.log(w);
console.log(typeof w);
console.log("***************************************************************");
w = "Esto es una cadena"; // no error
console.log(w);
console.log(typeof w);
console.log("***************************************************************");

w = {
  runANonExistentMethod: () => {
    console.log("I think therefore I am");
  }
} as { runANonExistentMethod: () => void}
console.log(w);
console.log(typeof w);
console.log("***************************************************************");
// How can we avoid the error for the code commented out below when we don't know the type?
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'.
if(typeof w === 'object' && w !== null) {
  (w as { runANonExistentMethod: Function }).runANonExistentMethod();
}
// Although we have to cast multiple times we can do a check in the "if" to secure our type and have a safer casting