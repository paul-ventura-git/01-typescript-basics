// Interfaces are similar to type aliases, except they only apply to object types.

interface Rectangle {
  height: number,
  width: number
}

const rectangle: Rectangle = {
  height: 20,
  width: 10
};

// 02. Interfaces con propiedades opcionales
interface RectangleOptional {
  height: number,
  width: number,
  color?: string // Propiedad opcional
}
const rectangleOptional: RectangleOptional = {
  height: 20,
  width: 10
};

// 03. Extending interfaces (object)
interface ColoredRectangle extends Rectangle {
  color: string
}

const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red"
};

console.log(coloredRectangle)
console.log(typeof coloredRectangle)

// 04. Interfaces para funciones
interface MyFunction {
  (a: number, b: number): number
}
// Define la forma de una función que recibe dos números y retorna un número
const add_5: MyFunction = (x, y) => x + y;
console.log(add(2, 3));

// 05. Interfaces para arrays
interface StringArray {
  [index: number]: string
} // Define la forma de un array de strings
const myArray: StringArray = ["Hello", "World"];
console.log(myArray[0]);

