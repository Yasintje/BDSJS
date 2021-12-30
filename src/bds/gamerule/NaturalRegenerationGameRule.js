const GameRule = require("../GameRule");

class NaturalRegenerationGameRule extends GameRule{

    /** @type {bool} */
    state = false;

    /**@param {bool} state */
    constructor(state = false){
        super('naturalRegeneration')
        this.state = state;        
    }

    getCommand(){
        return `gamerule ${this.name} ${this.state}`
    }

}

module.exports = NaturalRegenerationGameRule;