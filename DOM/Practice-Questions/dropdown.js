/* Write a JavaScript program to create a dropdown menu that shows and hides its options when clicked. */

let btn= document.querySelector("#dropBtn");
let option= document.querySelector(".options");
btn.addEventListener("click", (e)=>{
    option.style.display= option.style.display==='none'?'block':'none';
})