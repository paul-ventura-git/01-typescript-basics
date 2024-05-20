// Union types are used when a value can be more than a single type.
// Such as when a property would be string or number.

function printStatusCode(code: string | number) {
  console.log(`My status code is ${code}.`)
  console.log(typeof code)
}
printStatusCode(404);
printStatusCode('404');