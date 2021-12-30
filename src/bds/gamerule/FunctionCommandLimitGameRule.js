const GameRule = require("../GameRule");

class FunctionCommandLimitGameRule extends GameRule{

    /** @type {bool} */
    max = false;

    /**@param {bool} state */
    constructor(max = 10000){
        super('functionCommandLimit')
        this.max = max;        
    }

    getCommand(){
        return `gamerule ${this.name} ${this.max}`
    }

}

module.exports = FunctionCommandLimitGameRule;