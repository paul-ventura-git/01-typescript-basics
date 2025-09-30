// Primitive data types
let firstName: string = "Dylan"
let salary: number = 5000
let isMarried: boolean = true

// Arrays (objects)
let email: string[] = ['dylan@abc.com','dcarmona@example.co.uk']
let costs: number[] = [23,29,45]
let list: Array<number> = [1, 2, 3]

console.log(typeof firstName) // string
console.log(typeof salary)
console.log(typeof isMarried)

console.log(typeof email)
console.log(typeof costs)
console.log(typeof list)

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
 */