// Primitive data types
let firstName: string = "Dylan"
let salary: number = 5000
let isMarried: boolean = true

// Arrays
let email: string[] = ['dylan@abc.com','dcarmona@example.co.uk']
let costs: number[] = [23,29,45]
let list: Array<number> = [1, 2, 3]

// any: whenever you don’t want a particular value to cause typechecking errors.
let my_variable: any = true 

// unknown is a similar, but safer alternative to any.
let w: unknown = 1;
w = "string"; // no error
w = {
  runANonExistentMethod: () => {
    console.log("I think therefore I am");
  }
} as { runANonExistentMethod: () => void}
// How can we avoid the error for the code commented out below when we don't know the type?
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'.
if(typeof w === 'object' && w !== null) {
  (w as { runANonExistentMethod: Function }).runANonExistentMethod();
}
// Although we have to cast multiple times we can do a check in the if to secure our type and have a safer casting