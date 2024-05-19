function createSomething<type_S, type_T>(bounded_variable_1: type_S, bounded_variable_2: type_T): [type_S, type_T] {
  return [bounded_variable_1, bounded_variable_2];
}
console.log(createSomething<string, number>('hello', 42)); // ['hello', 42]

function my_function<H, G>(bounded_variable_1: H, bounded_variable_2: G): [H, G] {
  return [bounded_variable_1, bounded_variable_2];
}
console.log(my_function<boolean, string>(true, 'This is a string.'))