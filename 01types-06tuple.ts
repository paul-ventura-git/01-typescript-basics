/**
 * A tuple is a typed array with a pre-defined length and types for each index.
 */

// define our tuple
let ourTuple1: [number, boolean, string];

// initialize correctly
ourTuple1 = [5, false, 'Coding God was here'];
console.log(ourTuple1);
console.log(typeof ourTuple1);
console.log("********************************")
// initialize incorrectly
// ourTuple1 = [false, 'Coding God was mistaken', 5];

// We have no type safety in our tuple for indexes 3+
ourTuple1.push('Something new and wrong');
console.log(ourTuple1);
console.log(ourTuple1[2]);
console.log("********************************")

// define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
//ourReadonlyTuple.push('Coding God took a day off');

// named tuples
const graph: [x: number, y: number] = [55.2, 41.3];

// destructuring a tuple
const graph1: [number, number] = [55.2, 41.3];
const [coordenadas_x, coordenadas_y] = graph1;