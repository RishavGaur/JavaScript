// Creating button element
let newBtn= document.createElement("button");

// Modifying and Styling Element
newBtn.innerText= "click-me!";
newBtn.style.backgroundColor= "red";
newBtn.style.color= "white";

// Accessing document's body element
let body= document.querySelector("body");

// Adding element into document
body.prepend(newBtn);


// Next Question

let para= document.querySelector("p");
console.dir(para);
para.classList.add("second");