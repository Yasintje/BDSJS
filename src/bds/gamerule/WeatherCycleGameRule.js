const GameRule = require("../GameRule");

class WeatherCycleGameRule extends GameRule{

    /** @type {bool} */
    state = false;

    /**@param {bool} state */
    constructor(state = false){
        super("doWeatherCycle");
        this.state = state;        
    }

    getCommand(){
        return `gamerule ${this.name} ${this.state}`
    }

}

module.exports = WeatherCycleGameRule;