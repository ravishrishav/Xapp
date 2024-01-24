//Web Development (html, css, js - structure,style,logic)
//readability , modular , web caching.
//window object - created by browser (check window object by typing window in console or console.log(window)  - alert or many like console.log)
//dom- document object model - document object is inside window object)
//console.dir -  document (print method of object)  window -> document -> html -> head & body 
document.body.style.background = 'yellow';

//DOM manipulation -
// select by id - document.getElementById("heading") - #id
const element2 = document.getElementById("intro");

document.getElementById("demo").innerHTML = 
"The text from the intro paragraph is: " + element.innerHTML;
//select by class - document.getElementByClassName("heading") - .class
//selecting by tagName - document.getElementByTagName("p") - p
const element = document.getElementsByTagName("p");

document.getElementById("demo").innerHTML = 'The text in first paragraph (index 0) is: ' + element[0].innerHTML;

//tag inside main(id)
const x = document.getElementById("main");
const y = x.getElementsByTagName("p");

document.getElementById("demo").innerHTML = 
'The first paragraph (index 0) inside "main" is: ' + y[0].innerHTML;

// change html content
document.getElementById(id).innerHTML = new HTML

// change html attribute
document.getElementById("myImage").src = "landscape.jpg";

// Current date
document.getElementById("demo").innerHTML = "Date : " + Date();

//print as output directly in html (document.write)
<script>
document.write(Date());
</script>

//change css
document.getElementById("p2").style.color = "blue";

//change css by events
<button type="button" 
onclick="document.getElementById('id1').style.color = 'red'">
Click Me!</button>

//query selector - document.querySelector("myId / myClass / tag") 
//query selector - document.querySelectorAll("myId / myClass / tag") -nodelist

//DOM Manipulation
//Parent -> Child(siblings) -> Descendent
//nodes element,text,comment

//DOM manipulation properties - tagName, InnerText, innerHTML, textContent(visibility hidden)

//DOM attribute get attribute
let div = document.querySelector('div');
let id = div.getAttribute("id");
console.log("id")

//set attribute
let p = document.querySelector('div');
console.log(p.getAttribute("id","newId"));

//Style attribute
let h = document.querySelector('div');
div.style.backgroundColor = 'green';

//create and add elements by DOM
let newBtn = document.createElement('button');
newBtn.innerText = 'Click me';
let div = document.querySelector("div");
div.append(newBtn); //inside end
div.prepend(newBtn); //inside before
div.before(newBtn); // outside before
div.after(newBtn); // outside after

//eg heading
let newHeading = document.createElement('h1');
newHeading.innerHTML = "<i>Hi There!</i>";
document.querySelector("body").prepend(newHeading);

//delete node
let para = document.querySelector('p');
para.remove(); 
newHeading.remove();

//classlist - more than one class
para.classList.add("newClass");
