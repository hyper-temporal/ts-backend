import calc from "./calc";
import  askinput from "./askinput";
const f = (str : string) => { return "coucou";}
askinput(f)
console.log(calc)

import  * as m_sdb from  './serverdb'
import  * as  m_s from  './server'
require(  './event.js')
const fp = require(  './fp.js')

console.log(fp.e)
console.log(fp.fp(123))


// askQuestion("f")
// .then(x => { 
//     console.log(x); 
// });



const fstest = require ('./fileandco.js')

const greeting = require('./greetings.js')
const lpatho  = require('./path.js')
console.log(lpatho)


const person = require('./person.js')
greeting(person.name)

// var stdin = process.openStdin();

// stdin.addListener("querying data from stdin thru node", function(d) {
//     // note:  d is an object, and when converted to a string it will
//     // end with a linefeed.  so we (rather crudely) account for that  
//     // with toString() and then trim() 
//     console.log("you entered: [" + 
//         d.toString().trim() + "]");
//   });


const enboite =  "driving a " + person.car
console.log(enboite)
