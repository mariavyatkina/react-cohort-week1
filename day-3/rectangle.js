var Rectangle = /** @class */ (function () {
    function class_1(width, height) {
        this.width = width;
        this.height = height;
        this.perimeter = (width + height) * 2;
        this.area = width * height;
    }
    return class_1;
}());
var width = 5;
var height = 6;
var a = new Rectangle(width, height);
console.log(a);
