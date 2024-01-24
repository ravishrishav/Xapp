
name = 'Ravish kumar';
age = 34;
Price = 23.45;
x = null; // know what is inside storage that is empty
y = undefined; // Dont know what is inside storage 
bool = true;
console.log(name);
console.log(age);
console.log(Price);
console.log(x);
console.log(y);
console.log(bool);

name = 42;
console.log(name); //dynamically typed

//Variable name is case sensitive 
//letter,digit, underscore and $ sign is only allowed
//start with letter,underscore or $ is allowed. number is also not allowed
//Reseved word is not allowed.
//camel case fullName

//let,var,const   var-redeclare and updated   let- cannot redeclare but canbe updated  const-cannot be updated and cant be redeclare


// it will be undefined  (let a;)
//block means inside curly bracket {} and let or connst is block  but var is global


//Data type  typeof(variable)  1) Primitive numeric,String,boo;ean,undefined,null,big int  BigInt(123),symbol Symbol('Hello!')  2) NOn Primitive objects(Arrays,Function)

const student = {
    name : 'Ravish',
    age : 25,
    cgpa : 4.3,
    std : 10,
}
console.log(student.std);
console.log(student['name']);
student['name'] = 'Aarav Jain';
console.log(student['name']);