// 01. Intersection types con any
type Persona1 = { nombre: string };
type Flexible = any; // pierde seguridad de tipos

type PersonaFlexible = Persona1 & Flexible;

const p1: PersonaFlexible = { nombre: "Ana", edad: 25, activo: true }; 
// Se permite todo porque `any` absorbe el resto.

// 02. Intersection types con unknown
type Usuario1 = { id: number };
type Datos = unknown;

type UsuarioSeguro = Usuario1 & Datos;

const u1: UsuarioSeguro = { id: 1 }; 
// `unknown` obliga a tratar el tipo con precaución

function mostrar(u: UsuarioSeguro) {
  if ("id" in u) {
    console.log("ID:", u.id);
  }
}

// 03. Intersection types con union types
type Animal1 = { especie: string };
type Mascota = { nombre: string };
type Salvaje = { habitat: string };

type AnimalUnion = Mascota | Salvaje;
type AnimalCompleto = Animal1 & AnimalUnion;

const perro: AnimalCompleto = { especie: "Canino", nombre: "Firulais" };
const leon: AnimalCompleto = { especie: "Felino", habitat: "Sabana" };

// 04. Intersection types con enum
enum Rol {
  Admin = "ADMIN",
  Usuario = "USUARIO",
}

type Persona2 = { nombre: string };
type RolAsignado = { rol: Rol };

type PersonaConRol = Persona2 & RolAsignado;

const admin: PersonaConRol = { nombre: "Luis", rol: Rol.Admin };
const user: PersonaConRol = { nombre: "Carla", rol: Rol.Usuario };