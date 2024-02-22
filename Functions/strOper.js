function vowelCount(data){
    console.log(`You've entered= ${data}`);
    data= data.toLowerCase();
    let count=0;
    for(s of data){
        if(s=='a' || s=='e' || s=='i' || s=='o' || s=='u'){
            count++;
        }
    }
    console.log("Numbers of Vowels in the String are= ",count);
}

vowelCount("RishavRaj");