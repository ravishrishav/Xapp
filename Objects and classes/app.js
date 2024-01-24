const student = {
    fullName: "Ravish Kumarr Rishav",
    phone: 7050497127,
    printPhone: function () {
        console.log( "Phone number: ", this.phone); //this object
    },
};

//whenever we create a object, there a prototype will also be created by default and it is also like object with somme state and method
//array is also a object and we dont create push pop method but it is created by default

//Ex
const employee = {
    calcTax() {
        console.log('the tax is 10% of salary');
    },
};
const manish = {
    salary: 6000,
};
manish.__proto__ = employee;
//if object and prototype have same method then objects own method wil work

//Classes is a temolate of object or blueprint of object

class car {
    constructor(brand,milage) {
        console.log("Creating object");
        this.brandName = brand;
        this.milage = milage;
    }
    start() {
        console.log("start");
    }
    end() {
        console.log("end");
    }
    setBrand(brand) {
        this.brandName = brand;
    }
}
let toyota = new car('toyota', 20);
//toyota.setBrand('toyota');

// Inheritence = passing down properties and method from oarent to child

class person {
    eat() {
        console.log("eat");
    }
    sleep() {
        console.log("eat");
    }
    work() {
        console.log('Do nothing');
    }

};

class engineer extends person{
    work() {
        console.log("problem solve, build something");
    }
};
let ram = new engineer();

//If child and parent have same function then child function will invoke  (ove rinding)

//Super keyword used to call parent constructor in child

class light {
    constructor(name) {
        this.name = name;
    }
    glow() {
        console.log("Light glow");
    }
};

class LEDlight extends light{
    constructor(name) {
        super(name);
        console.log("Hi");
    }
    electric() {
        super.glow();
        console.log("Save Electricity");
    }
};

let mercury = new LEDlight('Surya');

//Tryr and catch
try {
    console.log(a);
} catch(err) {
    console.log(err);
}