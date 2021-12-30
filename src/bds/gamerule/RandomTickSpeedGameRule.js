const GameRule = require("../GameRule");

class RandomTickSpeedGameRule extends GameRule{

    /** @type {bool} */
    max = 1;

    /**@param {bool} max */
    constructor(max = 1){
        super('randomTickSpeed')
        this.max = max;        
    }

    getCommand(){
        return `gamerule ${this.name} ${this.max}`
    }

}

module.exports = RandomTickSpeedGameRule;