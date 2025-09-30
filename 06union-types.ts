// Union types are used when a value can be more than a single type.
// Such as when a property would be string or number.

function printStatusCode(code: string | number) {
  console.log(`My status code is ${code}.`)
  console.log(typeof code)
}
printStatusCode(404);
printStatusCode('404');

// 02. Union types with arrays 
// An array can contain multiple types using union types.
let mezcla: (string | number)[] = ["Ana", 25, "Luis", 30];

mezcla.push("Sofía");
mezcla.push(40);

console.log(mezcla);

// 03. Union types with literal values
type Direccion = "izquierda" | "derecha" | "arriba" | "abajo";

function mover_1(d: Direccion) {
  console.log("Moviendo hacia:", d);
}

mover_1("izquierda");
mover_1("arriba");
// mover("adelante"); ❌ Error: no está permitido
// Útil para definir un conjunto cerrado de valores permitidos sin necesidad de enum.

// 04. Union types in return types
function obtenerId(id: number | string): number | string {
  return id;
}

console.log(obtenerId(123));
console.log(obtenerId("abc123"));