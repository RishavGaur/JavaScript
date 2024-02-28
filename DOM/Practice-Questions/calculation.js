/* Write a JavaScript program to calculate multiplication and
 division of two numbers (input from the user). */

let a= document.querySelector("#first");
let b= document.querySelector("#second");

function addition(){
    let add= parseInt(a.value) + parseInt(b.value);
    document.querySelector("#show").prepend(add);
}

let sum= document.querySelector("#add");
sum.addEventListener("click", ()=>{
    document.querySelector("#show").innerText= "";
    addition();
});

function subtraction(){
    let sub= a.value-b.value;
    document.querySelector("#show").prepend(sub);
}

let sub= document.querySelector("#sub");
sub.addEventListener("click", ()=>{
    document.querySelector("#show").innerText= "";
    subtraction();
});

function multiplication(){
    let pro= a.value*b.value;
    document.querySelector("#show").prepend(pro);
}

let mul= document.querySelector("#multiply");
mul.addEventListener("click", ()=>{
    document.querySelector("#show").innerText= "";
    multiplication();
});

function division(){
    let div= a.value/b.value;
    document.querySelector("#show").prepend(div);
}

let divi= document.querySelector("#divide");
divi.addEventListener("click", ()=>{
    document.querySelector("#show").innerText= "";
    division();
})

let reset= document.querySelector("#reset");
reset.addEventListener("click",()=>{
    document.querySelector("#show").innerText= "";
})