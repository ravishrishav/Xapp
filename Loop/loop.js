//loop initialization , updating condition, breaking condition
for (let i = 0 ; i > 5 ; i++){
    console.log('Arrav');
}

//while initialization before and updation after

let i = 1;
while (i < 5 ) {
    console.log(i);
    i++
}

//do while (atleat one times work)

let j = 1;
do {
    console.log(j);
    i++;
}
while (i < 5 );

//for-of loops ,for-n loops (Strings and array iterates)
//for of
let sch = "Sainik";
for(let i of sch) { //iterator
    console.log(i);
}

//for in (Returns key)
let students= {
    name : "ravsh",
    school : Sainik,
    class : 8,
    sec : AbortController,
}

for ( let key in students){
    console.log(key, students[key]);
}


//String

let str = "Ravish";
let str2 = "Arav";

//Length str.length

//String indices str[0] or str.0 ;

//String template literals (  ${variable }   String interpolation ( ${Expression}))

//Escape character ( /n - next line /t - tab   and it will count as one character in string length)

//String methods - manulate string(Dont change original string)  (str.toUpperCase(), str.toLowerCase(), str.trim() - remove whitespace from start and end)
//str.concat(Str2)- add two string, str.slice(start, end) - cut string(last value not include), str.replace(oldVal, newValue),str.charAt(0)-(value of index)

//Note - String is immutabke(No change)