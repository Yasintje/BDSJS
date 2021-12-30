const GameRule = require("../GameRule");

class CommandBlockOutputGameRule extends GameRule{

    /** @type {bool} */
    state = false;

    /**@param {bool} state */
    constructor(state = false){
        super('commandBlockOutput')
        this.state = state;        
    }

    getCommand(){
        return `gamerule ${this.name} ${this.state}`
    }

}

module.exports = CommandBlockOutputGameRule;