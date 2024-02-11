const contain= (str)=>{
    console.log(`You've entered: ${str}`);
    str= str.toLowerCase();
    let count=0;
    for(s of str){
        if(s=='a' || s=='e' || s=='i' || s=='o' || s=='u'){
            count++;
        }
    }
    console.log(`Number of Vowels in the String is ${count}`);
}

let input= prompt("Enter String: ");
contain(input);