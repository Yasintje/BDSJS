const Server = require("../Server");

class GameRule{

    /** @type {string} */
    name = null;

    /**@param {string} name */
    constructor(name){ 
        this.name = name;
    }

    /** @returns {string} */
    getCommand(){
        return "";
    }

    /** @param {Server} server */
    save(server){
        server.getRunner().sendCommand(this.getCommand());
    }

}

module.exports = GameRule;