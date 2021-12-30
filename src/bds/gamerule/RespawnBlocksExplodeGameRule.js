const GameRule = require("../GameRule");

class RespawnBlocksExplodeGameRule extends GameRule{

    /** @type {bool} */
    state = false;

    /**@param {bool} state */
    constructor(state = false){
        super("respawnBlocksExplode");
        this.state = state;
    }

    getCommand(){
        return `gamerule ${this.name} ${this.state}`
    }

}

module.exports = RespawnBlocksExplodeGameRule;