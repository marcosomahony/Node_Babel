class Circle {
    constructor(x, y) {
        this.x = x;
        this.y = y
    }

    static pi() {
        return Math.PI;
    }
}

const circle = new Circle(2, 3);
console.log('Punto: ' + circle.x + ',' + circle.y);