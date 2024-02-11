function vowelCount(){
    let str= prompt("Enter String: ");
    console.log(`You've entered= ${str}`);
    str= str.toLowerCase();
    let count=0;
    for(s of str){
        if(s=='a' || s=='e' || s=='i' || s=='o' || s=='u'){
            count++;
        }
    }
    console.log("Numbers of Vowels in the String are= ",count);
}

vowelCount();