interface IEntitites
{
    id:number
}

class Product
{
    name:string;
    price:number;
    id:number;
    constructor(name:string, price:number){
        this.name=name;
        this.price=price;
        this.id=0;
    }
}

class Service{
    category:string;
    duration:number;
    id:number;
    constructor(category:string, duration:number){
        this.category=category;
        this.duration=duration;
        this.id=0;
    }
}

var p1=new Product("mobile",5);
var p2=new Product("tablet",8);
var p3=new Product("laptop",15);

var s1=new Service("accounting",50);
var s2=new Service("auditing",80);

//Generics

function post<T>(data:any, endpointUrl:string)
{
    const xhr=new XMLHttpRequest();

    xhr.open(
        "post",
        endpointUrl,
        true //async
    );

    xhr.setRequestHeader
    (
        "content-Type",
        "application/json"
    )

    const dataJson=JSON.stringify(data);

    xhr.onload=function()
    {
        var response:IEntitites=JSON.parse(xhr.response);
        //data.id=response.id;
        type savedData = T&IEntitites;
        var restResponse:savedData=
        {
            ...data,
            ...response
        };
        console.log("restResponse",restResponse);
    }

    xhr.send(dataJson);
}

const endPointProduct="http://localhost:3000/products";
const endPointService="http://localhost:3000/services";

post<Product>(p1,endPointProduct);
post<Product>(p2,endPointProduct);
post<Product>(p3,endPointProduct);

post<Service>(s1,endPointService);
post<Service>(s2,endPointService);
