const GameRule = require("../GameRule");

class ShowCoordinatesGameRule extends GameRule{

    /** @type {bool} */
    state = false;

    /**@param {bool} state */
    constructor(state = false){
        super("showCoordinates");
        this.state = state;        
    }

    getCommand(){
        return `gamerule ${this.name} ${this.state}`
    }

}

module.exports = ShowCoordinatesGameRule;