const GameRule = require("../GameRule");

class MaxCommandChainLengthGameRule extends GameRule{

    /** @type {bool} */
    max = false;

    /**@param {bool} max */
    constructor(max = 65536){
        super('keepInventory')
        this.max = max;        
    }

    getCommand(){
        return `gamerule ${this.name} ${this.max}`
    }

}

module.exports = MaxCommandChainLengthGameRule;