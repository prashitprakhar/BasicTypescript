class cars{
    make: string;
    color: string;
    constructor(makecompany: string, carColor: string){
        this.make = makecompany;
        this.color = carColor;
    };

    displaySpecs():string {
        return "Company is : "+this.make+" & color is : "+this.color;
    }
}

let lambo = new cars("Lamborghini", "White");

console.log(lambo.displaySpecs());
