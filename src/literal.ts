function printText(s: string, alignment: "left" | "right" | "center") {
    console.log(s + alignment)
  }
  printText("Hello, world ", "left");
  //printText("G'day, mate", "centre");


  //numeric literal
  function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
    //return a === b ? 2 : a > b ? 1 : -1;
  }


  interface Options {
    width: number;
  }
  function configure(x: Options | "auto" | "automatic") {
    // ...
  }
  configure({ width: 100 });
  configure("auto");
  configure("automatic");
  //configure("dgfdrg");
  
function handleRequest(url: string, method: "GET" | "POST"): void
{}

const req = { url: "https://example.com", method: "GET" } as const; //es const is to obtaiu
handleRequest(req.url, req.method);


const firstName = Symbol("name");
const secondName = Symbol("name");
    
console.log(firstName);
console.log(secondName);

declare const sym1: unique symbol;
// declare  sym2: unique symbol;
//c'est possible
class C {
    static readonly StaticSymbol: unique symbol = Symbol();
  }
// Create an array:
const cars = ["Saab", "Volvo", "BMW"]
//SOLUTION.JS
// const cars = Object.freeze(["Saab", "Volvo", "BMW"])
//SOLUTION.TS
//let cars : readonly string[] = ["Saab", "Volvo", "BMW"]
//BECAUSE cars is reference to array otherwise (cannot modify reref or reassign but can modify referenced value) 
cars[0] = "Toyota";
cars.push("Audi"); 

//ANY... (the 'IknowwhatIamdoingbetterthancompiler' mode )
  let obj: any = { x: 0 };
  // None of the following lines of code will throw compiler errors.
  // Using `any` disables all further type checking, and it is assumed
  // you know the environment better than TypeScript.
  obj.foo();
  obj();
  obj.bar = 100;
  obj = "hello";
  const n: number = obj;
