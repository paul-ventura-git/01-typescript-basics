// Clase abstracta simple
abstract class Animal5 {
  constructor(public nombre: string) {}

  abstract hacerSonido(): void;

  mover(): void {
    console.log(`${this.nombre} se está moviendo`);
  }
}

class Perro5 extends Animal5 {
  hacerSonido(): void {
    console.log("Guau!");
  }
}

const perro5 = new Perro5("Firulais");
perro5.hacerSonido(); // Guau!
perro5.mover(); // Firulais se está moviendo

// Clase abstracta con intersección de tipos y spread operator
type Credenciales = { usuario: string; contraseña: string };
type Configuracion = { modo: "producción" | "desarrollo" };

abstract class Servicio1 {
  constructor(public opciones: Credenciales & Configuracion, ...args: any[]) {}
  abstract conectar(): void;
}

class ApiServicio extends Servicio1 {
  conectar(): void {
    console.log(`Conectando como ${this.opciones.usuario} en modo ${this.opciones.modo}`);
  }
}

const api = new ApiServicio({ usuario: "root", contraseña: "1234", modo: "producción" });
api.conectar();

// Clase abstracta con genéricos

abstract class Repositorio<T> {
  constructor(...args: any[]) {}
  abstract agregar(item: T): void;
  abstract listar(): T[];
}

class RepoUsuarios extends Repositorio<string> {
  private usuarios: string[] = [];

  agregar(usuario: string): void {
    this.usuarios.push(usuario);
  }

  listar(): string[] {
    return this.usuarios;
  }
}

const repo = new RepoUsuarios();
repo.agregar("Alice");
repo.agregar("Bob");
console.log(repo.listar()); // ["Alice", "Bob"]