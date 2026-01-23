{
  // ================================
  // Inheritance in OOP with TypeScript
  // ================================

  // Parent class (base class)
  // This class contains common properties and methods
  class Parents {
    constructor(
      public name: string, // Name of the person
      public age: number, // Age of the person
      public address: string, // Address of the person
    ) {}

    // Common method shared by all child classes
    getSleep(sleepHours: number) {
      console.log(`Mr ${this.name} will sleep ${sleepHours} hours per day.`);
    }
  }

  // Student class inherits everything from Parents
  // No extra properties or methods for now
  class Student extends Parents {}

  // Teacher class inherits Parents and adds extra functionality
  class Teacher extends Parents {
    constructor(
      name: string,
      age: number,
      address: string,
      public designation: string, // Additional property for Teacher
    ) {
      // Call the parent constructor to initialize inherited properties
      super(name, age, address);
    }

    // Method specific to Teacher
    takeClass(numberOfClasses: number) {
      console.log(
        `Mr ${this.name} will take ${numberOfClasses} classes per day.`,
      );
    }
  }

  // Creating an object (instance) of Student
  const student1 = new Student("Yousuf Ali", 19, "Botessor, Sylhet.");

  // Creating an object (instance) of Teacher
  const teacher1 = new Teacher("Musa", 34, "Tilagore, Sylhet.", "Professor");

  // Calling inherited method from Parents class
  student1.getSleep(6);

  // Calling method specific to Teacher class
  teacher1.takeClass(2);
}
