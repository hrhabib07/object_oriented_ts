{
  class Animal {
    constructor(
      public name: string,
      public species: string,
      public sound: string,
    ) {}
    makeSound() {
      console.log(`Our ${this.name} bhai says ${this.sound}`);
    }
  }

  const person1 = new Animal("Hifjur", "MUian", "Ha ha ");
  person1.makeSound();
}
