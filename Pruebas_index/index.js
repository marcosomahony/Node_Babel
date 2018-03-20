// Arrow function y el this.

function Circle(x, y){
    this.y =y;
    this.x= x;

    this.point = () => {                        // con las arrow function no necesitamos bind.
        console.log(this);                      // el this se manntiene e circle.
        console.log(`Point: ${this.x}`);
    }
}

const circle = new Circle(2, 3);
circle.point();
setTimeout(circle.point, 1000);                 // si usasemos point como funcion normel, this seria Timeout.