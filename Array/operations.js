let company= ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

console.log("New companies are: ");
for(let c of company){
    console.log(c);
}

// Removing first Index from Array
let firstElPop= company.shift();
console.log("\nRemoved the first company from the Array: ",firstElPop);

console.log("\nBefore Replacing Companies are:");
for(let c of company){
    console.log(c);
}
// Removing Uber & Add Ola in its Place
company.splice(2,1,"Ola");
console.log("\nAfter Replacing Companies are:");
for(let c of company){
    console.log(c);
}

// Adding Amazon at end
company.push("Amazon");
console.log("Companies after adding Amazon: ");
for(let c of company){
    console.log(c);
}