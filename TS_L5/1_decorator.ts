//If we have a particular class and several objects of the class have already
//been created and now we want to add a function/feature to the class which will
//be accessible to all the objects created as well as those that would be created later

//This is done by leveraging the Product.prototype which is the link between
//objects of the class and and Function prototype. [DECORATOR]

//Ideally a Decorator pattern is a way to add more attributes or properties
//on top of the existing features without affecting the current functionality


//Decorator function
function helper(classConstructor : Function)
{
    var proto = classConstructor.prototype;

    //Product.prototype
    proto.toString=function() // hiding object.prototype.toString
    {
        return JSON.stringify(this);
    }

    proto.toCsv=function()  //new function added using decorator
    {
        var csvData=[];
        for(let prop in this)
        {
            if(prop!="toString" && prop!="toCsv")
            {
                csvData.push(prop);
                csvData.push(this[prop]);
            }
        }
        return csvData.join(",");
    }
}

@helper
class Product
{
    name:string;
    qty:number;
    constructor(name:string , qty:number)
    {
        this.name=name;
        this.qty=qty;
    }
}

@helper
class Service
{
    type:string;
    vendor:string;
    constructor(type:string, vendor:string)
    {
        this.type=type;
        this.vendor=vendor;
    }
}

//var p1=new Product("Mobiles",100);
//console.log(p1.toString()); //overridden feature

type helperT = {toString:()=>string , toCsv:()=>string};
type ProductT = Product & helperT;
var p1:ProductT = new Product("Mobiles",100) as ProductT // Type casting

console.log(p1.toCsv());  //added feature i.e. custom property
