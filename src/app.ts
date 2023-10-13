
import funny from  './streamsandco'
funny()
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


import myEmitter from './event'
import askinput from "./askinput";
import path from "path";
import randomstring from "./randomstring";
import { createFile, createFileString} from "./createfile";

askinput(
    (line : string) => {
        myEmitter.emit('newSale', 123)
        const str = line.trim()
        let fstr= str + path.sep + randomstring(123)
        createFileString(fstr)
        console.log(`but still, you a ${"coucou"}`)
    },
    (line : string) => {
        console.log(`such a ${"coucou"}`)

    }
)
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

