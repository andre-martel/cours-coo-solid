interface Animal {
  walk(): void;
  fly(): void;
}

class Dog implements Animal {
  walk() {
    console.log("Walking");
  }

  fly() {
    throw new Error("Dogs cannot fly");
  }
}

class Duck implements Animal {
  walk() {
    console.log("Walking");
  }

  fly() {
    console.log("Flying");
  }
}
