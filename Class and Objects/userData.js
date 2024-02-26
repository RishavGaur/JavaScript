class User{
    constructor(name, email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log("User Name= ",this.name);
        console.log("User Email= ",this.email);
    }
}

class Admin extends User{
    constructor(name, email){
        super();
        this.name=name;
        this.email=email;
        console.log("This is Admin Here...");
    }
    editData(){
        console.log("User Name= ",this.name);
        console.log("User Email= ",this.email);
    }
}

let student1= new User("Rohit", "abc@gmail.com");
student1.viewData();

let admin1= new Admin("Rishav", "freeky@gmail.com");
admin1.editData();