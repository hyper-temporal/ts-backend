const server = require ('./server.js')

const ev = require ('./event.js')
ev()

// myEmitter.emit('newSale', 599.99)
let fp = require ('./fp.js')

console.log(fp.e)
console.log(fp.fp(123))

const askQuestion = require ('./askinput.js')

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
