let num= prompt(`Enter nth Number: `);
let arr=[];
for(let i=1;i<=num;i++){
    arr[i-1]= i;
}
console.log(arr);

// Calculating sum of all array elements
let sum= arr.reduce((res,curr)=>{
    return res+curr;
})
console.log(`Sum of elements from 1 to ${num} is= ${sum}`);

// Calculating product of all numbers in the array
let pro= arr.reduce((res,curr)=>{
    return res*curr;
})
console.log(`Product of Array element from 1 to ${num} is ${pro}`);