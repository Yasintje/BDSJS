const { EventEmitter } = require("events");

class EventListener extends EventEmitter{
    constructor(){
        super();
    }
}

module.exports = EventListener;