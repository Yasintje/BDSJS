const GameRule = require("../GameRule");

class ImmediateRespawnGameRule extends GameRule{

    /** @type {bool} */
    state = false;

    /**@param {bool} state */
    constructor(state = false){
        super('doImmediateRespawn')
        this.state = state;        
    }

    getCommand(){
        return `gamerule ${this.name} ${this.state}`
    }

}

module.exports = ImmediateRespawnGameRule;