const EventEmitter = require('events')

const customEmitter = new EventEmitter()


//first we set up the listeners,
//after we set the emitter, if we do it the 
//other way around, nothing happens
//we can have several listeners for the same event.
customEmitter.on('response', (name, id)=> {
    console.log(`data received user ${name} with id: ${id}`)
})

customEmitter.on('response', ()=> {
    console.log(`some other logic here`)
})

//we can add more parameters for the event

customEmitter.emit('response', 'john', 34)