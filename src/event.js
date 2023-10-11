const EventEmitter = require('events');
const Module = require('module');

const myEmitter = new EventEmitter()

myEmitter.on('newSale', (total) => {
  console.log(`A new sale occur total of: ${price}`)
})

Module.exports  = myEmitter