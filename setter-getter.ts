class Student {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  // getter
  get name(): string {
    return this._name;
  }

  // setter
  set name(value: string) {
    if (value.length === 0) {
      throw new Error("Name cannot be empty");
    }
    this._name = value;
  }
}

const s1 = new Student("Habib");

console.log(s1.name); // getter is called
s1.name = "Rahman"; // setter is called
