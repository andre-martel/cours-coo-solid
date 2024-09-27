interface Shape {
  getArea(): number;
}

class Rectangle implements Shape {
  constructor(private width: number, private length: number) {}

  setWidth(width: number) {
    this.width = width;
  }

  setLength(length: number) {
    this.length = length;
  }

  getArea() {
    return this.width * this.length;
  }
}

class Square implements Shape {
  side: number;

  constructor(side: number) {
    this.side = side;
  }

  getArea(): number {
    return this.side * this.side;
  }
}
