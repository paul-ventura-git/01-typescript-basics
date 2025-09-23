let obj: any = { x: 0 };
console.log(obj);
console.log(typeof obj);
console.log(obj.x);

// None of the following lines of code will throw compiler errors.
// Using `type any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
// obj.foo();
// obj();
obj.bar = 100;
console.log(obj);
console.log(typeof obj);
console.log(obj.bar);

obj = "hello";
console.log(obj);
console.log(typeof obj);

// obj will convert number to a string
const n: number = obj;
console.log(n);
console.log(typeof n);

/**
 *  Instrucciones para compilar y ejecutar:
 * 1. Asegurarse de tener instalado Node.js y TypeScript
 *    npm install typescript --save-dev
 * 2. Configurar el archivo tsconfig.json si es necesario
 * 3. Abrir una terminal y navegar al directorio del archivo
 * 4. Ejecutar el comando:
 *    npx tsc 01types-any.ts --target es6 --module commonjs --strict --noEmit
 * 5. Si no hay errores, ejecutar el archivo compilado con Node.js:
 *    node 01types-any.js  
 * 
 */