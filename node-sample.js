/**
 * Using NodeJs Only
 */
const http = require('http');
const port = 3000;
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('HOME PAGE')
    }

    if(req.url === '/about') {
        res.end('About Us')
    }
});

server.listen(port,hostname, () => {
    console.log(`server running at http://${hostname}:${port}`);
})
