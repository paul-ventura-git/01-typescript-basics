// 01. Usando typeof como type guard
function imprimirId(id: number | string) {
  if (typeof id === "string") {
    console.log("ID en mayúsculas:", id.toUpperCase()); // aquí es string
  } else {
    console.log("ID numérico:", id.toFixed(2)); // aquí es number
  }
}

imprimirId("abc123");
imprimirId(42);

// 02. Usando instanceof como type guard
class Perro {
  ladrar() { console.log("Guau 🐶"); }
}
class Gato {
  maullar() { console.log("Miau 🐱"); }
}

function hacerSonido(animal: Perro | Gato) {
  if (animal instanceof Perro) {
    animal.ladrar(); // aquí TS sabe que es Perro
  } else {
    animal.maullar(); // aquí TS sabe que es Gato
  }
}

hacerSonido(new Perro()); // instanceof discrimina entre clases (Perro o Gato)
hacerSonido(new Gato());

// 03. Usando in como type guard
interface Admin {
  nombre: string;
  permisos: string[];
}

interface Usuario {
  nombre: string;
  email: string;
}

function mostrarInfo(persona: Admin | Usuario) {
  if ("permisos" in persona) {
    console.log("Admin con permisos:", persona.permisos);
  } else {
    console.log("Usuario con email:", persona.email);
  }
}

mostrarInfo({ nombre: "Ana", permisos: ["leer", "escribir"] }); 
mostrarInfo({ nombre: "Luis", email: "luis@mail.com" }); // in verifica si una propiedad existe en el objeto.

// 04. Type guards personalizados
interface Pez { nadar(): void; }
interface Pajaro { volar(): void; }

function esPez(animal: Pez | Pajaro): animal is Pez {
  return (animal as Pez).nadar !== undefined;
} //El "animal is Pez" en la firma es lo que convierte a la función en un type guard explícito.

function mover(animal: Pez | Pajaro) {
  if (esPez(animal)) {
    animal.nadar(); // aquí TS sabe que es Pez
  } else {
    animal.volar(); // aquí TS sabe que es Pajaro
  }
}