abstract class User
{
    name:String;
    age:Number;

    constructor(name:string, age:number)
    {
        this.name=name;
        this.age=age;
    }
    
    abstract getUserType() : string;
}

class InternalUser extends User
{
    constructor(name:string, age:number) {
        super(name,age);
    }
    getUserType(): string {
        return "Internal Organization User";
    }
}

var u1=new InternalUser("Max",30);
console.log(u1.getUserType);
