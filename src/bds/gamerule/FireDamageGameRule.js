const GameRule = require("../GameRule");

class FireDamageGameRule extends GameRule{

    /** @type {bool} */
    state = false;

    /**@param {bool} state */
    constructor(state = false){
        super('fireDamage')
        this.state = state;        
    }

    getCommand(){
        return `gamerule ${this.name} ${this.state}`
    }

}

module.exports = FireDamageGameRule;