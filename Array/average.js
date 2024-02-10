let arr=[85,97,44,37,76,60];
console.log("Students Marks are: ");

let sum=0;
for(let m of arr){
    console.log(m);
    sum+=m;
}

let avg= sum/arr.length;

console.log(`Average Marks of Students are: ${avg}`);