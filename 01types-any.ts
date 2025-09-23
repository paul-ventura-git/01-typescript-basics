let obj: any = { x: 0 };
console.log(obj);
console.log(typeof obj);
console.log(obj.x);
console.log("********************************");
// None of the following lines of code will throw compiler errors.
// Using `type any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
// obj.foo();
// obj();
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

/**
 *  Instrucciones para compilar y ejecutar:
 * 1. Asegurarse de tener instalado Node.js y TypeScript
 *    npm install typescript --save-dev
 * 2. Configurar el archivo tsconfig.json para que pueda compilar en el directorio correcto (./build ó ./dist)
 * 3. Abrir una terminal y navegar al directorio del archivo
 * 4. Ejecutar el comando:
 *    tsc
 * 5. Si no hay errores, ejecutar el archivo compilado con Node.js:
 *    node 01types-any.js  
 * 
 */