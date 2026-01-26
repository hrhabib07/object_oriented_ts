{
  class Person {
    public name: string; // public → accessible from anywhere
    protected age: number; // protected → accessible inside class and subclasses
    private secret: string; // private → accessible only inside this class

    constructor(name: string, age: number, secret: string) {
      this.name = name; // allowed (public)
      this.age = age; // allowed (protected)
      this.secret = secret; // allowed (private)
    }

    public getAge() {
      // public method → callable from outside
      return this.age; // can access protected member
    }

    public revealSecret() {
      // public method
      return this.secret; // can access private member
    }
  }

  class Student extends Person {
    growUp() {
      this.age += 1; // allowed because age is protected
      // this.secret ❌ not allowed because secret is private
    }
  }

  const p = new Student("Habib", 21, "likes tea");

  p.name = "Habib Ahmed"; // allowed (public)
  // p.age ❌ not allowed (protected)
  // p.secret ❌ not allowed (private)

  p.growUp(); // allowed (public method)
  console.log(p.name); // allowed (public)
  console.log(p.getAge()); // allowed via public method
  console.log(p.revealSecret()); // allowed via public method
}
