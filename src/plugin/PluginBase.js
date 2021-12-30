const Server = require("../Server");

class PluginBase{

    /** @type {Server} */
    #server = null;

    /** @param {Server} server */
    constructor(server){
        this.#server = server;
    }

    onEnable(){}

    /** @returns {Server} */
    getServer(){
        return this.#server;
    }
}

module.exports = PluginBase;