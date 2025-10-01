// 01. Object type básico
let persona: object = { nombre: "Ana", edad: 25 };
// persona.nombre ❌ Error: TS no sabe qué propiedades tiene
console.log(persona);

// 02. Object type con propiedades tipadas explícitamente
let coche: { marca: string; anio: number } = {
  marca: "Toyota",
  anio: 2023,
};

console.log(coche.marca);

// 03. Object type con propiedades opcionales
let libro: { titulo: string; autor?: string } = {
  titulo: "1984",
  // autor es opcional
};
console.log(libro.autor); // undefined

// 04. Object type con index in signature
let userslist: { [index: number]: string } = ["Ana", "Luis", "Sofía"];
let result: string[] = [];
for (let i in userslist) {
  result.push(userslist[i].toUpperCase());
}
console.log(result);
console.log(result.length);

// 05. Object con tipo any
let mix: { [key: string]: any } = {
  nombre: "Luis",
  edad: 30,
  activo: true,
  datos: [1, 2, 3],
};

mix.extra = "campo libre";
console.log(mix);

// 06. Object con tipo unknown
// unknown requiere verificación de tipo antes de usarse
let datos1: { [key: string]: unknown } = {
  id: 101,
  activo: true,
  nombre: "Marta",
};

if (typeof datos1.nombre === "string") {
  console.log(datos1.nombre.toUpperCase());
}

// 07. Spread operator con objetos tipados
let base: { id: number } = { id: 1 };
let info: { nombre: string } = { nombre: "Carlos" };

let usuario: { id: number; nombre: string } = { ...base, ...info };
console.log(usuario);


// 08. Object con funciones como propiedades
let manejador: { ejecutar: () => void } = {
  ejecutar: () => {
    console.log("Acción ejecutada");
  },
};

manejador.ejecutar();

// 09. Object con funciones que reciben parámetros
let calculadora: { sumar: (a: number, b: number) => number } = {
  sumar: (a, b) => a + b,
};
console.log(calculadora.sumar(5, 10));

// 10. object vs. {} vs. Record<string, any>
// object → más semántico que {}, pero no detalla estructura.
// {} → acepta casi cualquier cosa, incluso primitivos → menos estricto (null, undefined).
// Record<string, any> → ideal para diccionarios dinámicos con claves string y valores sin restricciones.

let a1: object = { x: 1 }; 
a1 = [1,2]; 
a1 = () => {};

let b1: {} = 42;
b1 = "texto";
b1 = { x: 1 };

let c1: Record<string, any> = { nombre: "Ana", edad: 30 };
c1["extra"] = [1,2,3];