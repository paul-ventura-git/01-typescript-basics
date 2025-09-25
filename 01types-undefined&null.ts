/*
  undefined means a variable has been declared but not assigned a value
  null is an explicit assignment that represents no value or no object

  In TypeScript, both have their own types: undefined and null respectively
  With strictNullChecks enabled, you must explicitly handle these types
*/

let y: undefined = undefined;
let z: null = null; // object

console.log(typeof y)
console.log(typeof z)

// These types don't have much use unless strictNullChecks is enabled in the tsconfig.json file.

// y = "now I'm defined"; // Error if strictNullChecks is enabled
// z = 123; // Error if strictNullChecks is enabled