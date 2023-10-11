require('./keylog')
import map from "./exparser";

const parsints = map(
    ["1", "2", "3"], 
    (n) => parseInt(n));

const parsfloats = map(
    ["1,12", "2e2", "3.3"], 
    (n) => parseFloat(n));

console.log(parsints)
console.log(parsfloats)

import  askinput from "./askinput";
const f = (str : string) => { return "coucou";}
askinput(f)

require( './serverdb')
require( './server')
require( './event')
require( './fileandco')

import Person from './person'
import greeting from './greetings'
greeting(Person.name)

const lpatho = require('./path')
console.log(lpatho)
console.log("driving a " + Person.car)

