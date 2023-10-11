const EventEmitter = require('events');
const Module = require('module');

const myEmitter = new EventEmitter()

myEmitter.on('newSale', (total : number) => {
  console.log(`A new sale occur total of: ${total}`)
})

Module.exports  = myEmitter