const PlayerConnection = require("./PlayerConnection");
const Server           = require("../Server");
const PlayerVector = require("./PlayerVector");

class Player extends PlayerConnection{

    /** @type {Server} */
    #server = null;

    /**
     * @param {Player} client 
     * @param {Server} server
     */
    constructor(client, server){
        super(client);
        this.#server = server;

        this.getServer().getListener().emit("player_create", this);
    }

    getVector3(){
        // let client = this.getClient();
        // console.log(client);
        // let vector = new PlayerVector(client);
    }

    /** @param {string} message */
    sendMessage(message){
        this.sendRawMessage(message);
    }

    /** @returns {string} */
    getName(){
        return this.getClient().userData.displayName;
    }

    setNameTag(){
        // TODO: ADD CUSTOM NAME TAG
    }

    /** @returns {Server} */
    getServer(){
        return this.#server;
    }

}

module.exports = Player;