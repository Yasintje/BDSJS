const GameRule = require("../GameRule");

class DrowningDamageGameRule extends GameRule{

    /** @type {bool} */
    state = false;

    /**@param {bool} state */
    constructor(state = false){
        super('drowningDamage')
        this.state = state;        
    }

    getCommand(){
        return `gamerule ${this.name} ${this.state}`
    }

}

module.exports = DrowningDamageGameRule;