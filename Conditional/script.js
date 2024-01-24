//expression a+b where a and b are operand and + is operator
//Arithmetic (+,-,*,/) Modulus(%-remainder of divide)
//Increment Deccrement (a++,first a and then change, ++a first change then print same with a--and --a
//Asignment operator (=, +=, -=, *=, %=, **=)
//Comparison operator (==,>=,<=,  ===(type also comparer), !==(not equal to type))
//Logical operator (&& (Logical and *), || (Logical or +), !(Logical not))

//if else elseif
let age = 15;
console.log(age);
if (age > 18) {
    console.log("You are eligible for license");
}
else if (age < 18) {
    console.log("You are not eligible ");
}

//Ternary oprator eg (age> 18 ? true : false)

//Switch case
let fruit = "Mango";
switch (fruit) {
    case 'Mango':
        console.log('True');
        break
    default:
        console.log("Not found");
}

//prompt()  take input in alert