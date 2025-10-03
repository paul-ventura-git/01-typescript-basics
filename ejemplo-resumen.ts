interface interfaz_1 {
  propiedad_1: string;
  propiedad_2: number;
  propiedad_3: boolean | null;
}

abstract class ClaseAbstracta_1<T> {
  abstract abs_class_prop_1: T;
  abstract abs_class_prop_2: string;

  constructor(public datos: T) {}
  abstract mostrarDatos(): void;
}