// 01. Herencia entre interfaces
interface Persona3 {
  nombre: string;
}

interface Empleado3 extends Persona3 {
  id: number;
}

const e1: Empleado3 = { nombre: "Ana", id: 101 };

// 02. Implementación de interfaces en clases
interface Animal3 {
  mover(): void;
}

class Perro3 implements Animal3 {
  mover() {
    console.log("El perro corre");
  }
}

const p = new Perro3();
p.mover();

// 03. Herencia de clase base
class Vehiculo {
  constructor(public marca: string) {}
  encender() { console.log(`${this.marca} encendido`); }
}

class Auto extends Vehiculo {
  abrirMaletera() { console.log("Maletera abierta"); }
}

const v = new Auto("Toyota");
v.encender();
v.abrirMaletera();

// 04. Herencia con super()
class FiguraClass {
  constructor(public color: string) {}
}

class Circulo1 extends FiguraClass {
  constructor(color: string, public radio: number) {
    super(color);
  }
}
const c = new Circulo1("rojo", 10);

// 05. Simulación de herencia con el spread operator
const base1 = { id: 1, nombre: "Base" };
const extendido = { ...base1, rol: "admin" };

console.log(extendido); // { id: 1, nombre: "Base", rol: "admin" }

// 06. Herencia flexible con union types
type Usuario8 = { nombre: string };
type Admin8 = Usuario8 & { permisos: string[] };

const admin8: Admin8 = { nombre: "Carlos", permisos: ["leer", "escribir"] };

// 07. Clase base genérica y clase hija
class Caja1<T> {
  constructor(public valor: T) {}
}

class CajaNumerica extends Caja1<number> {
  doble() { return this.valor * 2; }
}

const cn = new CajaNumerica(10);
console.log(cn.doble()); // 20

// 08. Herencia en interfaces genéricas
interface Repositorio<T> {
  obtener(): T;
}

interface RepositorioConID<T> extends Repositorio<T> {
  obtenerPorId(id: number): T;
}

class UserRepo implements RepositorioConID<string> {
  obtener() { return "Usuario"; }
  obtenerPorId(id: number) { return `Usuario ${id}`; }
}

// 09. Herencia múltiple con mixins
// Paso 1. Definimos dos mixins como clases base
class Volador {
  volar() {
    console.log("Estoy volando ✈️");
  }
}

class Nadador {
  nadar() {
    console.log("Estoy nadando 🐟");
  }
}

// Paso 2. Creamos un tipo que combina ambas
type Constructor<T = {}> = new (...args: any[]) => T;

// Paso 3. Mixins que añaden comportamiento
function VoladorMixin<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    volar() {
      console.log("Mixin: Vuelo como un ave 🦅");
    }
  };
}

function NadadorMixin<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    nadar() {
      console.log("Mixin: Nado como un pez 🐠");
    }
  };
}

// Paso 4. Clase principal que hereda de Object y aplica mixins
class SuperAnimal extends VoladorMixin(NadadorMixin(Object)) {
  constructor(public nombre: string) {
    super();
  }
}

const pato = new SuperAnimal("Donald");
pato.volar(); // Mixin: Vuelo como un ave 🦅
pato.nadar(); // Mixin: Nado como un pez 🐠
console.log(pato.nombre); // Donald