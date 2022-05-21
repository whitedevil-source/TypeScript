var collection = [10, "Ten"];

var collection2: string[] = ["One", "Two", "Three"];

var collection3: { name: string, country: string }[] = [
    { name: "John", country: "USA" },
    { name: "Peter", country: "UK" },
    { name: "Sara", country: "USA" }
];

// What we have done is Type aliasing



type numStr = number | string;
var collection4: numStr[] = [10, "Ten"];


// Tuple 
var domCollection = [] //Tuple
domCollection[0]=10;
domCollection[1]=20;
domCollection[2]="";
// Work similar to array; tuple requires no type definitions