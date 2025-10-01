// 01. Constructor con any
// any permite asignar cualquier cosa sin restricciones (pierdes seguridad de tipos).
class Box {
  contenido: any;

  constructor(contenido: any) {
    this.contenido = contenido;
  }
}

const box1 = new Caja("Texto");
const box2 = new Caja(123);
const box3 = new Caja({ clave: "valor" });

// 02. Constructor con unknown
// Con unknown, el compilador exige comprobaciones antes de usar el valor.
class Contenedor {
  valor: unknown;

  constructor(valor: unknown) {
    this.valor = valor;
  }

  mostrarSiEsString() {
    if (typeof this.valor === "string") {
      console.log("Cadena:", this.valor.toUpperCase());
    }
  }
}

const c11 = new Contenedor("hola");
c1.mostrarSiEsString(); // Cadena: HOLA

// 03. Constructor con union types
// Permite múltiples tipos, pero con restricciones de uso según el tipo actual.
class Resultado {
  data: string | number;

  constructor(data: string | number) {
    this.data = data;
  }

  imprimir() {
    console.log("Resultado:", this.data);
  }
}

const r1 = new Resultado("aprobado");
const r2 = new Resultado(100);

// 04. Constructor con intersection types
// Intersection (&) obliga a cumplir todos los tipos al mismo tiempo.
type Persona = { nombre: string };
type Empleado = { id: number };

class Registro {
  info: Persona & Empleado;

  constructor(info: Persona & Empleado) {
    this.info = info;
  }
}

const reg = new Registro({ nombre: "Ana", id: 123 });
console.log(reg.info.nombre, reg.info.id);

// 05. Constructor combinado : union + intersection
// Aquí el constructor acepta o bien un producto con stock, o bien un servicio con costo.
type Producto5 = { nombre: string };
type Servicio = { costo: number };

class Item {
  detalle: (Producto5 & { stock: number }) | Servicio;

  constructor(detalle: (Producto5 & { stock: number }) | Servicio) {
    this.detalle = detalle;
  }
}

const item1 = new Item({ nombre: "Laptop", stock: 5 });
const item2 = new Item({ costo: 300 });

// 06. Constructor genérico
// Permite definir el tipo al crear la instancia, manteniendo seguridad de tipos.
class CajaGenerica<T> {
  contenido: T;
  constructor(contenido: T) {
    this.contenido = contenido;
  }
  abrir(): T {
    return this.contenido;
  }
}
const cajaStr = new CajaGenerica<string>("Mensaje");
const cajaNum = new CajaGenerica<number>(42);
console.log(cajaStr.abrir().toUpperCase());
console.log(cajaNum.abrir().toFixed(2));

// 07. Clase genérica con 2 tipos
class Par<A, B> {
  primero: A;
  segundo: B;

  constructor(primero: A, segundo: B) {
    this.primero = primero;
    this.segundo = segundo;
  }
}

const coordenada = new Par<number, number>(10, 20);
const entrada = new Par<string, boolean>("activo", true);

console.log(coordenada); // { primero: 10, segundo: 20 }
console.log(entrada);    // { primero: "activo", segundo: true }

// 08. Clase genérica con restricciones (extends)
class Identificable<T extends { id: number }> {
  entidad: T;

  constructor(entidad: T) {
    this.entidad = entidad;
  }
}

const usuario6 = new Identificable({ id: 1, nombre: "Ana" });
// const error = new Identificable({ nombre: "Sin id" }); ❌ Error: falta `id`