var cars = /** @class */ (function () {
    function cars(makecompany, carColor) {
        this.make = makecompany;
        this.color = carColor;
    }
    ;
    cars.prototype.displaySpecs = function () {
        return "Company is : " + this.make + " & color is : " + this.color;
    };
    return cars;
}());
var lambo = new cars("Lamborghini", "White");
console.log(lambo.displaySpecs());
//# sourceMappingURL=classConstructor.js.map