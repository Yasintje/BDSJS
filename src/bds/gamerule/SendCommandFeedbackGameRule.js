const GameRule = require("../GameRule");

class SendCommandFeedbackGameRule extends GameRule{

    /** @type {bool} */
    state = false;

    /**@param {bool} state */
    constructor(state = false){
        super("sendCommandFeedback");
        this.state = state;        
    }

    getCommand(){
        return `gamerule ${this.name} ${this.state}`
    }

}

module.exports = SendCommandFeedbackGameRule;