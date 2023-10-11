const EventEmitter = require('events');


let myEmitter  = new EventEmitter()

myEmitter.on('newSale', (total : number) => {
  console.log(`A new sale occur total of: ${total}`)
})

export default myEmitter

