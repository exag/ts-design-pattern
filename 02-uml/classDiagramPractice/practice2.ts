export {};

// クラス図 演習2
interface Shape {
  calcArea(): number;
}

class Client {
  private shape: Shape;
}

class Rectangle {
  private width: number;
  private height: number;

  calcArea(): number {
    return this.width * this.height;
  }
}
class Circle {
  private radius: number;

  calcArea(): number {
    return this.radius * this.radius * Math.PI;
  }
}
