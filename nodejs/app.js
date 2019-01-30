
/*const Logger = require('./logger');

var log = new Logger();
log.on("messageLogged", (args) => {
    console.log(`The message: ${args.message} is logged with id ${args.id}`)    
});
log.log("logging duration...", 100);*/

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write("Hello World");
        res.end();
    }
});

server.listen(3000);

console.log('Listening on port 3000');