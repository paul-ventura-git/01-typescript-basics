// 01. Array tipado básico
let numeros: number[] = [1, 2, 3, 4];
numeros.push(5); 
// numeros.push("hola"); ❌ Error
console.log(numeros);

// 02. Array de strings con el spread operator
let frutas: string[] = ["manzana", "pera"];
let nuevas: string[] = ["uva", "naranja"];

let todas = [...frutas, ...nuevas]; // ["manzana", "pera",    "uva", "naranja"]
console.log(todas);
console.log(typeof todas);

// 03. Array con union types
// Muy útil para colecciones de datos heterogéneas
let mezcla_1: (number | string)[] = [1, "dos", 3, "cuatro", "cinco"];
mezcla_1.push(6);
mezcla_1.push("");
console.log(mezcla_1);

// 04. Array con tipo any
// Flexibilidad máxima pero sin seguridad de tipos
let libre: any[] = [1, "texto", true, { nombre: "Ana" }];
libre.push([1, 2, 3]);
console.log(libre);

// 05. Array con tipo unknown
// Similar a any pero más seguro, requiere verificación de tipo antes de usar
let datos: unknown[] = [1, "hola", true];

datos.forEach(dato => {
  if (typeof dato === "string") {
    console.log("Es string:", dato.toUpperCase());
  } else {
    console.log("Otro tipo:", dato);
  }
});

// 06. Array con tipo never
// Usado para arrays que nunca deberían tener elementos
// never[] solo sirve para casos muy específicos (funciones que no devuelven nada, estados imposibles, etc.).
let vacio: never[] = [];
// vacio.push(1); //❌ Error: nunca se puede agregar nada
console.log(vacio);

// 07. Array genérico
// Array<T> es equivalente a T[], solo otra sintaxis.// Array<string> = string[]
let ids: Array<number> = [101, 102, 103];
ids.push(104);
console.log(ids);

// 08. Array de objetos tipados
interface Producto { //Como crear un tipo personalizado "Producto"
  nombre: string;
  precio: number;
}

let carrito: Producto[] = [
  { nombre: "Laptop", precio: 1200 },
  { nombre: "Mouse", precio: 25 }
];

carrito.push({ nombre: "Teclado", precio: 50 });

console.log(carrito);

// 09. Array tipado de objetos con el spread operator
interface UsuarioPremium {
  id: number;
  nombre: string;
}

let usuarios1: UsuarioPremium[] = [
  { id: 1, nombre: "Ana" },
  { id: 2, nombre: "Luis" }
];

let usuarios2: UsuarioPremium[] = [
  { id: 3, nombre: "Marta" },
  { id: 4, nombre: "Carlos" }
];

// Unimos arrays usando spread
let todos: UsuarioPremium[] = [...usuarios1, ...usuarios2];

console.log(todos);



