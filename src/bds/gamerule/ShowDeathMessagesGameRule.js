const GameRule = require("../GameRule");

class ShowDeathMessagesGameRule extends GameRule{

    /** @type {bool} */
    state = false;

    /**@param {bool} state */
    constructor(state = false){
        super("showDeathMessages");
        this.state = state;        
    }

    getCommand(){
        return `gamerule ${this.name} ${this.state}`
    }

}

module.exports = ShowDeathMessagesGameRule;