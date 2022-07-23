const http = require('http')

const server = http.createServer((req, res) => {

    //huge objeet
    //console.log(req)

    if(req.url === '/'){
        res.end('Welcome to our home page')
        //res.write('Welcome to our home page')
        //res.end()
    }
    else if(req.url === '/about'){
        //same as write and end
        res.end('Here is our short history')
    }
    else{
        res.end(`
        <h1>OOps!</h1>
        <p>We can not seem to find the page you are looking for</p>
        <a href='/'>back home</a>
        `)
    }
        
})

server.listen(5000)