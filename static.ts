// Student class represents a blueprint, not an individual student
class Student {
  // Instance property → each object will have its own copy
  name: string;

  // Static property → belongs to the class itself, not to objects
  // Shared by all instances of Student
  static totalStudents = 0;

  constructor(name: string) {
    // 'this' refers to the current object being created
    this.name = name;

    // Access static property using the CLASS name
    // This line runs every time a new Student object is created
    Student.totalStudents++;
  }
}

// Creating first object (instance) of Student
const s1 = new Student("Habib");

// Creating second object (instance) of Student
const s2 = new Student("Rahman");

// Static property is accessed using the class name
// It holds the total number of Student objects created
console.log(Student.totalStudents); // Output: 2
