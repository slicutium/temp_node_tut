const os = require('os')

//info about current users

const user = os.userInfo()
console.log(user)

// method returns teh system uptime in seconds
console.log(`The system Uptime is ${os.uptime()} seconds`)


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)