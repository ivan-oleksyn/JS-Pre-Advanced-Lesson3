function CoffeeMake(coffeeType, ingredWater = 'water', ingredCoffee = 'coffee', ingredSugar = 'sugar') {
    this.coffeeType = coffeeType;
    this.ingredWater = ingredWater;
    this.ingredCoffee = ingredCoffee;
    this.ingredSugar = ingredSugar;
}
CoffeeMake.prototype.on = function () {
    console.log(`Making  ${this.coffeeType}`)
}
CoffeeMake.prototype.off = function () {
    console.log('Your drink is ready!')
}

function DripCoffee(coffeeType, ingredWater, ingredCoffee, ingredSugar) {
    CoffeeMake.call(this, coffeeType, ingredWater, ingredCoffee, ingredSugar);
}
DripCoffee.prototype = Object.create(CoffeeMake.prototype);
DripCoffee.prototype.constuctor = DripCoffee;
DripCoffee.prototype.esspresso = function () {
    console.log(`Esspresso ingredients: ${this.ingredWater}, ${this.ingredCoffee}, ${this.ingredSugar},`)
}
let esspresso = new DripCoffee('esspresso');
esspresso.on();
esspresso.esspresso();
esspresso.off();

function CarobCoffee(coffeeType, ingredWater, ingredCoffee, ingredSugar, ingredMilk = 'milk') {
    CoffeeMake.call(this, coffeeType, ingredWater, ingredCoffee, ingredSugar);
    this.ingredMilk = ingredMilk;
}
CarobCoffee.prototype = Object.create(CoffeeMake.prototype);
CarobCoffee.prototype.constuctor = CarobCoffee;
CarobCoffee.prototype.late = function () {
    console.log(`Late ingredients: ${this.ingredWater}, ${this.ingredCoffee}, ${this.ingredSugar}, ${this.ingredMilk}`)
}
let late = new CarobCoffee('late');
late.on();
late.late();
late.off();

function CoffeeMachine(coffeeType, ingredWater, ingredCoffee, ingredSugar, ingredMilk = 'milk', ingredChoco = 'chocolate') {
    CoffeeMake.call(this, coffeeType, ingredWater, ingredCoffee, ingredSugar);
    this.ingredMilk = ingredMilk;
    this.ingredChoco = ingredChoco;
}
CoffeeMachine.prototype = Object.create(CoffeeMake.prototype);
CoffeeMachine.prototype.constuctor = CarobCoffee;
CoffeeMachine.prototype.macaccino = function () {
    console.log(`Macaccino ingredients: ${this.ingredWater}, ${this.ingredCoffee}, ${this.ingredSugar}, ${this.ingredMilk}`)
}
let macaccino = new CoffeeMachine('macaccino');
macaccino.on();
macaccino.macaccino();
macaccino.off();