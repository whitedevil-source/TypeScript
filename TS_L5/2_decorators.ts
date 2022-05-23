type optionsT
{
    separator:string
}

//Decorator function
//function helper(classConstructor : Function)
function helper(options:optionsT)   //Parametrized decorator
{
    return function(classConstructor:Function)
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
            return csvData.join(options.separator);
        }
    }
}

@helper
(
    {
        separator:"|"
    }
)
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
(
    {
        separator:":"
    }
)
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
