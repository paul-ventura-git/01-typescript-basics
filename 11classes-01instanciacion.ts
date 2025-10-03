/**
 * 10. Classes
 * Classes are a template for creating objects. They ENCAPSULATE data with code to work on that data.
 * In TypeScript, you can define properties and methods within a class, and you can also use access modifiers to control the visibility of these members.
 */
class Person {
  private readonly name: string;

  public constructor(name: string) {
    // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person = new Person("Jane");
console.log(person.getName());