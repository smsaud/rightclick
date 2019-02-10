
const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(message, _id) {
        console.log(message);
        this.emit("messageLogged", {'id': _id, 'message': message});
    }
}

module.exports = Logger;
