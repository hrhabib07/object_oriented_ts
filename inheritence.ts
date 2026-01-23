{
  // inheritence in OOP with ts

  class Parents {
    constructor(
      public name: string,
      public age: number,
      public address: string,
    ) {}
    getSleep(sleepHours: number) {
      console.log(`Mr ${this.name} will sleep ${sleepHours} hours per day.`);
    }
  }

  class Student extends Parents {}
  class Teacher extends Parents {
    constructor(
      name: string,
      age: number,
      address: string,
      public designation: string,
    ) {
      super(name, age, address);
    }
    takeClass(numberOfClasses: number) {
      console.log(
        `Mr ${this.name} will take ${numberOfClasses} class per day.`,
      );
    }
  }
  const student1 = new Student("Yousuf Ali", 19, "Botessor, Sylhet.");
  const teacher1 = new Teacher("Musa", 34, "Tilagore, Sylhet.", "Professor");
  student1.getSleep(6);
  teacher1.takeClass(2);
}
