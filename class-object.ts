{
  // Class = blueprint for creating objects
  class Animal {
    // Constructor runs automatically when a new object is created
    // 'public' here automatically creates and assigns properties
    constructor(
      public name: string, // name of the animal
      public species: string, // species type
      public sound: string, // sound the animal makes
    ) {}

    // Method (function inside a class)
    // This defines behavior of the Animal object
    makeSound() {
      console.log(`Our ${this.name} bhai says ${this.sound}`);
    }
  }

  // Creating an object (instance) from the Animal class
  const person1 = new Animal("Hifjur", "Mammal", "Ha ha");

  // Calling a method on the object
  person1.makeSound();
}
