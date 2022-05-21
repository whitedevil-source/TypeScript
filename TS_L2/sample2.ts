// defining custom types

type deviceType = "phone" | "tablet" | "laptop"; // Typed Literals

var device: deviceType;
device = "phone";
//device = "hello"; //error

type type1 = {
    name: string,
    age: number
}

var obj1: type1; // it's not the type but the shape of the object matters
obj1 = {
    name: "John",
    age: 30
}

class User {
    name: string;
    age: number;
    constructor() {
        
    }
}

class Service{
    servicetype:string;
    constructor(servicet){
        this.servicetype=servicet;
    }
}

obj1 = new User(); //User is a another type but it has same shape as of type1

 type entity = User | Service;
// var obj2: entity;
// obj2 = new User();
// obj2 = new Service("");

// This is called Type Aliases

// var obj3 = new entity(); // It's not a DataType it's an Type Alias

//---------------------//
function f5():User|Service
{
    return new User();
}
function f6():entity  //better to use
{
    return new User();
}
//-----------------------//

type idEntity={
    id:string;
}
//type entity2=User&Service&idEntity;
type entity2=User&Service&{id:string};
var aggrementType:entity2;
aggrementType=
{
    name:"Max",age:30,servicetype:"",id:""
}
