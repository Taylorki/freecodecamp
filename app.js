const http = require('http');
const fs = require('fs'); 

const hostname = '127.0.0.1';
const port = 3000;

const html = fs.readFileSync('main.html'); 

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});