class Point {
    xx = 22;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    add() {
        return this.x + this.y;
    }
}

console.log(Point.x);

var aaa = new Point(3, 4);
var bbb = new Point(5, 6);

console.log(aaa.xx);
console.log(bbb.xx);
aaa.xx = 222;
console.log(aaa.xx);
console.log(bbb.xx);

export default Point;