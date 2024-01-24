// Arrays  - Collection of items (Property gives value, method does some work)
let superHeroes = [ "Captain India" , "Iron Man" ];
console.log(superHeroes.length);

//Array typeof(object) - non primitive data types just like object

//Array indices ( superHeroes[1])

//Array value change
superHeroes[0] = "Black Panther";  //This doesn't work in string bcoz it is immutable

//use loop for index print

for(let i = 0; i < superHeroes.length; i++) {
    console.log(superHeroes[i]);
}

//for of used 
for ( let j of superHeroes) {
    console.log(j);
}

//Arrays Methods (Some method change value but some not unlike string which doesn't change) push()-add end (change original),
// pop() - delete from end (change),toString() - convert array into string (doesn't change oringinal, concate(), 
//unshift() - add in the begining, shift() - deleted first , slice(start, end)- (doesn't change)
// splice(startelement, count of change, addnew element) - (add,remove and upadate array))
