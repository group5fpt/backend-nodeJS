const http = require('http');
const expres = require('express');

const port = 3000;
const hostname = 'localhost'
const app = expres.Router();

app.get('/abc', (req,res) => {
    console.log(123)
    
})

const server = http.createServer((req, res) => {
    req.statusCode = 200;
    res.setHeader('content-Type', 'text/plain');
    res.end('hello world');
})

server.listen(port, hostname, () => console.log(`Server running at http://${hostname}:${port}/`))