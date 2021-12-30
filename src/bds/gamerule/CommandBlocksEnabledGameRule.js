const GameRule = require("../GameRule");

class CommandBlocksEnabledGameRule extends GameRule{

    /** @type {bool} */
    state = false;

    /**@param {bool} state */
    constructor(state = false){
        super('commandBlocksEnabled')
        this.state = state;        
    }

    getCommand(){
        return `gamerule ${this.name} ${this.state}`
    }

}

module.exports = CommandBlocksEnabledGameRule;