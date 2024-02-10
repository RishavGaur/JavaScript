rightNum= 50;
let userNum= prompt("Enter Right Number to win the game: ");
while(rightNum!=userNum){
    alert("You've entered wrong Number, Please Enter the Right Number :)");
    userNum= prompt("Enter Right Number to win the game: ");
}
console.log("Congratulations! You entered the Right Number");
console.log("You Won the Game");