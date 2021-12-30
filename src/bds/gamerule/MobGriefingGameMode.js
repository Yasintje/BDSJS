const GameRule = require("../GameRule");

class MobGriefingEnabledGameRule extends GameRule{

    /** @type {bool} */
    state = false;

    /**@param {bool} state */
    constructor(state = false){
        super('mobGriefing')
        this.state = state;        
    }

    getCommand(){
        return `gamerule ${this.name} ${this.state}`
    }

}

module.exports = MobGriefingEnabledGameRule;