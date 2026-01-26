{
  class Person {
    public name: string;
    protected age: number;
    private secret: string;

    constructor(name: string, age: number, secret: string) {
      this.name = name;
      this.age = age;
      this.secret = secret;
    }

    public getAge() {
      return this.age;
    }

    public revealSecret() {
      return this.secret;
    }
  }

  class Student extends Person {
    growUp() {
      this.age += 1;
    }
  }

  const p = new Student("Habib", 21, "likes tea");
  p.growUp();
  console.log(p.name, p.getAge(), p.revealSecret());
}
