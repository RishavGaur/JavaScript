/* Write a JavaScript program that creates a button and add a click event listener to log a message 
when it's clicked. */

// Button tag create
let btn= document.createElement("button");

// Modifying
btn.innerText= "Click Me!";
btn.classList.add("btn");

// Adding
let body= document.querySelector("body");
body.prepend(btn);

btn.addEventListener("click",(e)=>{
    console.log("Button Clicked");
})