// 01. Polimorfismo con herencia de clases
class Animal {
  hablar(): void {
    console.log("El animal hace un sonido");
  }
}

class Perro2 extends Animal {
  hablar(): void {
    console.log("Guau 🐶");
  }
}

class Gato2 extends Animal {
  hablar(): void {
    console.log("Miau 🐱");
  }
}

const animales: Animal[] = [new Perro2(), new Gato2()];
animales.forEach(a => a.hablar());

// 02. Polimorfismo con interfaces
interface Figura {
  area(): number;
}

class Cuadrado implements Figura {
  constructor(private lado: number) {}
  area(): number {
    return this.lado * this.lado;
  }
}

class Circulo implements Figura {
  constructor(private radio: number) {}
  area(): number {
    return Math.PI * this.radio * this.radio;
  }
}

const figuras: Figura[] = [new Cuadrado(4), new Circulo(3)];
figuras.forEach(f => console.log(f.area()));

// 03. Polimorfismo con funciones genéricas
function identidad<T>(arg: T): T {
  return arg;
}
console.log(identidad<number>(42)); // 42
console.log(identidad<string>("Hola")); // "Hola"
console.log(identidad<boolean>(true)); // true
console.log(identidad<{ nombre: string }>({ nombre: "Ana" })); // { nombre: "Ana" }
console.log(identidad<number[]>([1, 2, 3])); // [1, 2, 3]
console.log(identidad<Animal>(new Perro2())); // Perro2 {}

// 04. Polimorfismo con union types
function mostrar(valor: string | number): void {
  if (typeof valor === "string") {
    console.log("Texto:", valor.toUpperCase());
  } else {
    console.log("Número:", valor.toFixed(2));
  }
}

mostrar("hola");
mostrar(3.1416);

// 05. Polimorfismo con sobrecarga de métodos
class Logger {
  log(mensaje: string): void;
  log(mensaje: number): void;
  log(mensaje: any): void {
    console.log("Log:", mensaje);
  }
}

const logger = new Logger();
logger.log("Hola mundo");
logger.log(12345);

// 06. Polimorfismo con generics
// Una clase se adapta al tipo que le indiquemos
class Caja<T> {
  constructor(private contenido: T) {}
  abrir(): T {
    return this.contenido;
  }
}

const caja1 = new Caja<string>("Mensaje secreto");
const caja2 = new Caja<number>(101);

console.log(caja1.abrir());
console.log(caja2.abrir());

// 07. Polimorfismo con callbacks
function procesar(valor: number, callback: (n: number) => number) {
  return callback(valor);
}

console.log(procesar(5, x => x * 2)); // 10
console.log(procesar(5, x => x + 10)); // 15

// 08. Polimorfismo con interfaces extendidas
interface Usuario9 {
  nombre: string;
}

interface Admin9 extends Usuario9 {
  permisos: string[];
}

function saludar(u: Usuario9) {
  console.log("Hola", u.nombre);
}

const admin9: Admin9 = { nombre: "Ana", permisos: ["crear", "borrar"] };
saludar(admin9);

// 08. Polimorfismo con tipos literales