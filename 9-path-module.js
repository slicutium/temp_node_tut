const path = require('path')

//returns platform default separator
console.log(path.sep)
// / for mac \ for windows

const filePath = path.join('/content/','subfolder', 'text.txt')
console.log(filePath)


const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname,'content','subfolder', 'test.txt')
console.log(absolute)