class Rectangle {
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

class Square extends Rectangle {
  constructor(side: number) {
    super(side, side);
  }

  public setWidth(width: number) {
    super.setWidth(width);
    super.setLength(width);
  }

  public setLength(length: number) {
    super.setWidth(length);
    super.setLength(length);
  }
}

const rect: Rectangle = new Square(10);
rect.setWidth(20);
rect.getArea(); // Should be 200 but if rect is a Square, area is 400 ❌
