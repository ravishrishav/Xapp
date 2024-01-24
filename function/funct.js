//Function - block of code that performs specific task and invoke(function name + parenthesis) when needed
// Minimize redundancy (Repeat)

function add(num1, num2) { //parameter
    let sum = num1+num2;
    console.log(sum);
    
}
add(6, 7); //argument

//Another way
//Params are like local variable which is only  exist for block scope
function add2(num1, num2) { //parameter
    let sum = num1+num2;
    return sum;
    
}
let val = add2(6, 7); //argument
console.log(val);

//Arrow function
const add3 = (num1, num2) => { //parameter
    let sum = num1+num2;
    return sum;
    
}

//forEach method for Arrow (when fuction associate with anything = method )
//callback is a function which is passed as a argument to another fuction is called callback

let num = [ 1, 2, 3, 4,5 ];
num.forEach((val, idx, num) => {
    console.log(val, idx, num);
});

//higher order function - either return function or take function as parameter
//Another way 
const arr = [ 1, 2, 3, 4];
const calc = (num)=> {
    console.log(num*num);

}

arr.forEach(calc);

//map is like as foreach but have new array
let roll = [2, 4 , 6 ,8];
roll.map((val) => {
    console.log(val);
});

// array

const newRoll = roll.map((val) => {
    return val;
});
console.log(newRoll);

//filter array
let oldroll= roll.filter(val => {
    return val % 2 == 0;
})
console.log(oldroll);

//reduce 
let output = roll.reduce((res, curr) => {
    return res+curr;
}
)
console.log(output);

//largest by reduce
let output2 = roll.reduce((res, curr) => {
    return res>curr ? res : curr;
}
)
console.log(output2);