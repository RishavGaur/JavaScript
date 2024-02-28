/* Write a JavaScript program to display the current day and 
time in the following format.
Today is : Tuesday.
Current time is : 10 PM : 30 : 38 */

let today= new Date();

// Current day
let day= today.getDay();
let dayList= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let showDay= document.createElement("h3");
showDay.innerText= `Today is: ${dayList[day]}.`;
document.querySelector("body").prepend(showDay);


// Current Time
let hours= today.getHours();
let minutes= today.getMinutes();
let seconds= today.getSeconds();

let showTime= document.createElement("h3");
showTime.innerText= `Current Time is: ${hours}: ${minutes}: ${seconds}`;
document.querySelector("body").append(showTime);


// Print current window contents
let btn= document.createElement("button");
btn.innerText="Print";
btn.classList.add("btn");
btn.addEventListener("click", ()=>{
    window.print();
});
document.querySelector("body").append(btn);