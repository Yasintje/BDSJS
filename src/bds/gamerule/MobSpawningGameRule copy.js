const GameRule = require("../GameRule");

class MobSpawningGameRule extends GameRule{

    /** @type {bool} */
    state = false;

    /**@param {bool} state */
    constructor(state = false){
        super('doMobSpawning')
        this.state = state;        
    }

    getCommand(){
        return `gamerule ${this.name} ${this.state}`
    }

}

module.exports = MobSpawningGameRule;