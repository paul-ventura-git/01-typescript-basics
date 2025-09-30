
/**
 * 01. Basic Generics
 * Generics provide a way to make components work with any data type and not restrict to one data type.
 * Generic parameters: type_S and type_T (they act as placeholders for types)
 * @param bounded_variable_1: type_S
 * @param bounded_variable_2: type_T 
 * @returns [type_S, type_T]
 */
function createSomething<type_S, type_T>(bounded_variable_1: type_S, bounded_variable_2: type_T): [type_S, type_T] {
  return [bounded_variable_1, bounded_variable_2];
}
console.log(createSomething<string, number>('hello', 42)); // ['hello', 42]

/**
 * Generic parameters: H and G (they act as placeholders for types)
 * @param bounded_variable_1: H 
 * @param bounded_variable_2: G 
 * @returns [H, G]
 */
function my_function<H, G>(bounded_variable_1: H, bounded_variable_2: G): [H, G] {
  return [bounded_variable_1, bounded_variable_2];
}
console.log(my_function<boolean, string>(true, 'This is a string.'))