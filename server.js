const http = require('http');
const hostname = '127.0.0.1'; //eli 127.0.0.1:3000
const port = 3000; //muista ei päällekkyyksiä 

const server = http.createServer( //creteserver on funktio
    function (req, res) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World\n');
    }
);

server.listen(port, hostname, 
    function() {
        console.log(`Server running at http://${hostname}:${port}/`); //{sulkeisiin jotta muuttuja saadaan käyttöön täälläkin}
    }
);