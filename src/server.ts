const http = require('http')
const fs = require('fs')

const server = http.createServer(
    (req : any, res : any)=>{
        if (req.url === '/') {
            res.end('<h1>HHome page</h1>')
        } else if (req.url === '/about') {
            res.end('<h1>About page</h1>')
        } 
        else if (req.url === '/stream') {

            // No need to load the entire file to memory
            // fs.readFile('data.txt', (err, data) => {
            //    if (err) console.log(err)
            //    res.end(data);
            // })

            // Create a Readable Streams
            const readable = fs.createReadStream('info.txt')
            // Pipe the Stream chunk to a writable Stream
            readable.pipe(res);
    }
    
    else {
        res.writeHead(404, {
            'Content-type': 'text/html'
        })
        res.end('<h1>Page not found</h1>')
    }    
})

server.listen(5000, 'localhost', () => {
    console.log('Server is listening at localhost on port 5000')
})

export default server