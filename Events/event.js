//Events - Change in the state of an object
//Mouse event(Click, double click)
//Keyboard event(Keypress,keyup, keydown)
//Form event (Submit)
//Print event (console.log())

// Only last event occur (Noemal handker)
let btn1 = document.querySelector("#btn1");
btn1.onClick = (event) => {
    console.log("Clicked");
    console.log(event)
};


//eventlisteners (many event can occur)
btn1.addEventListener( "click", () => {
    console.log("event lister 1"); 
}); 
btn1.addEventListener( "click", (event) => {
    console.log("event lister 2"); 
    console.log(event);
}); 

// remove event listener
btn1.removeEventListener( "click", () => {
    console.log("event lister 1"); 
}); 