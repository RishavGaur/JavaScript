/* Write a JavaScript program that implements a "form" validation
 that displays an error message if a required field is left
  empty when submitting the form. */

let name = document.querySelector("#fname");
let phone = document.querySelector("#number");
let mail = document.querySelector("#mail");
let pass= document.querySelector("#pass");
let cpass= document.querySelector("#cpass");

let input= document.querySelector("input");

let form= document.querySelector("#myForm");

let flag=1;

function userName(){
    if(name.value==""){
        document.querySelector("#nameErr").innerText="User Name is Empty";
        name.classList.add("error");
        flag=0;
    }else if(name.value.length<3){
        document.querySelector("#nameErr").innerText="User Name Required Minimum 3 Character";
        name.classList.add("error");
        flag=0;
    }else{
        document.querySelector("#nameErr").innerText="";
        name.classList.remove("error");
    }
}

function phoneNumber(){
    if(phone.value == ""){
        document.querySelector("#phoneErr").innerText="Phone Number is Empty";
        phone.classList.add("error");
        flag=0;
    }else if(phone.value.length>10 || phone.value.length<10){
        document.querySelector("#phoneErr").innerText="Phone Number Should be 10 digits";
        phone.classList.add("error");
        flag=0;
    }else if(isNaN(phone.value)){
        document.querySelector("#phoneErr").innerText="Phone enter a valid Number";
        phone.classList.add("error");
        flag=0;
    }else{
        document.querySelector("#phoneErr").innerText="";
        phone.classList.remove("error");
    }
}

function mailVal(){
    if(mail.value == ""){
        document.querySelector("#mailErr").innerText="Mail is Empty";
        mail.classList.add("error");
        flag=0;
    }else{
        document.querySelector("#mailErr").innerText="";
        mail.classList.remove("error");
    }
}

function passVal(){
    if (pass.value=="") {
        document.querySelector("#passErr").innerText="Please Create Password";
        pass.classList.add("error");
        flag=0;
    }else{
        document.querySelector("#passErr").innerText="";
        pass.classList.remove("error");
    }
    
    if(cpass.value==""){
        document.querySelector("#cpassErr").innerText="Please Confirm Password";
        cpass.classList.add("error");
        flag=0;
    }else if(pass.value!=cpass.value){
        document.querySelector("#cpassErr").innerText="Password Not Matched";
        cpass.classList.add("error");
        flag=0;
    }else{
        document.querySelector("#cpassErr").innerText="";
        cpass.classList.remove("error");
    }
}

function control() {
    userName();
    phoneNumber();
    mailVal();
    passVal();
    console.log("Function Called");
    if(flag){
        return true;
    }else{
        return false;
    }
}

form.addEventListener("submit",(e)=>{
    // control();
    // userName();
    // phoneNumber();
})