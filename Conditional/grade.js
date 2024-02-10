let marks= prompt("Enter Scores of Student(0-100): ");
console.log("You got grade: ");
if(marks>=80 && marks<=100){
    console.log("A");
}else if(marks>=70 && marks<80){
    console.log("B");
}else if(marks>=60 && marks<70){
    console.log("C");
}else if(marks>=50 && marks<60){
    console.log("D");
}else{
    console.log("F");
}