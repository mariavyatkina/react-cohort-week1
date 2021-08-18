
const Rectangle = class {
    width: number;
    height: number;
    perimeter: number;
    area: number;
    constructor(width: number, height: number)
    {
        this.width = width;
        this.height = height;
        this.perimeter = (width + height) * 2;
        this.area = width * height;
    }
}

let width = 5;
let height = 6;
let a = new Rectangle(width, height);
console.log(a);


