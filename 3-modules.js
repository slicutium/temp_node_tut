//CommonJs, every file is module (by default)
//Modules - Encapsulated Code (only share minimum)
//const secret = 'SUPER SECRET'
//const john = 'john'
//const peter = 'peter'

//const sayHi = (name) => {
//    console.log(`Hello there ${name}`)
//}


//when we create our own modules, start with "./"
//const names = require('./4-names')
//unpacking the module exports
const {john, peter} = require('./4-names')
const sayHi = require('./5-utils')
//console.log(names)
//console.log(sayHi)

const data = require('./6-alternative-flavor')
//console.log(data)
require('./7-mind-granade')

sayHi('susan')

//since we are asking for john and peter now and before we created
//the constant names that carried both, we have to unpack them first
//so now we unpack when we require the module
sayHi(john)
sayHi(peter)

//another way to do it, is to use the attributes of the created constant
//const names = require('./4-names')
//sayHi(names.john)
//sayHi(names.peter)