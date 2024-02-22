let arr=[1,3,2,5,4,6,7];
arr.splice(2,2,101,102);
console.log(arr);

// Adding Element 
arr.splice(4,0,105);
console.log(arr);

// Delete Element
arr.splice(3,1);
console.log(arr);

// Replacing Element
arr.splice(3,1,103);
console.log(arr);