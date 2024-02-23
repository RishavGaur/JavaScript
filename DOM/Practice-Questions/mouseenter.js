/* Write a JavaScript function that changes the background color of an element when a mouse enters it. */

let one= document.querySelector(".one");
let two= document.querySelector(".two");
let three= document.querySelector(".three");

one.addEventListener("mouseenter",(e)=>{
    one.style.backgroundColor= 'darksalmon';
})
one.addEventListener("mouseleave",(e)=>{
    one.style.backgroundColor= 'aquamarine';
})
two.addEventListener("mouseenter",(e)=>{
    two.style.backgroundColor= "hotpink";
})
two.addEventListener("mouseleave",(e)=>{
    two.style.backgroundColor= "aqua";
})
three.addEventListener("mouseenter",(e)=>{
    three.style.backgroundColor= "cornflowerblue";
})
three.addEventListener("mouseleave",(e)=>{
    three.style.backgroundColor= "cadetblue";
})