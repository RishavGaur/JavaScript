let divs= document.querySelectorAll(".box");
// console.dir(divs);
// console.dir(divs[0]);
// console.dir(divs[1]);
// console.dir(divs[2]);

// divs[0].innerText= "First Unique";
// divs[1].innerText= "Second Unique";
// divs[2].innerText= "Third Unique";

let x=1;
for(let div of divs){
    div.innerText= `Unique ${x}`;
    x++;
}