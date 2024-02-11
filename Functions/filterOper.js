let arr= [87,99,88,96,95,77,92,100];
console.log(`All Marks of Students are:\n ${arr}`);
let filtered= arr.filter((val)=>{
    return val>90;
})
console.log(`Marks of Students that scored 90+ are:\n ${filtered}`);