const GameRule = require("../GameRule");

class TileDropsGameRule extends GameRule{

    /** @type {bool} */
    max = 5;

    /**@param {bool} max */
    constructor(max = 5){
        super("spawnRadius");
        this.max = max;        
    }

    getCommand(){
        return `gamerule ${this.name} ${this.max}`
    }

}

module.exports = TileDropsGameRule;