// Se usa cuando se quiere definir una función al momento de llamarla
// O no se conoce exactamente la operación que se va a realizar.

/**
 * La función recibe un callback que define la operación a realizar
 * @param a 
 * @param b 
 * @param callback 
 * @returns 
 */
function calcular(a: number, b: number, callback: (x: number, y: number) => number): number {
  return callback(a, b);
}

// Diferentes usos
console.log(calcular(5, 3, (x, y) => x + y)); // 8
console.log(calcular(5, 3, (x, y) => x * y)); // 15

/**
 * Callback para procesar cada elemento de un array
 * @param arr 
 * @param callback 
 */
function procesarArray(arr: number[], callback: (valor: number) => void): void {
  for (let n of arr) {
    callback(n);
  }
}

// Uso: imprimir cada número multiplicado por 2
procesarArray([1, 2, 3, 4], (num) => {
  console.log(num * 2);
});

/**
 * Callback con condición para filtrar elementos de un array
 * @param arr: T[] 
 * @param callback 
 * @returns 
 */
function filtrar<T>(arr: T[], callback: (valor: T) => boolean): T[] {
  let resultado: T[] = [];
  for (let item of arr) {
    if (callback(item)) {
      resultado.push(item);
    }
  }
  return resultado;
}

// Uso: quedarnos solo con números pares
const pares = filtrar([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0);
console.log(pares); // [2, 4, 6]

/**
 * Callback después de una operación asíncrona (simulada con setTimeout)
 * @param nombre 
 * @param callback 
 */
function esperarYSaludar(nombre: string, callback: (mensaje: string) => void): void {
  setTimeout(() => {
    callback(`¡Hola, ${nombre}!`);
  }, 1000); // espera 1 segundo
}

// Uso
esperarYSaludar("Ana", (mensaje) => {
  console.log(mensaje);
});