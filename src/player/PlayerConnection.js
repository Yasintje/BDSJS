const TextPacket = require("../network/TextPacket");
const TextType   = require("../network/types/TextType");

class PlayerConnection{

    /** @type {import("bedrock-protocol").Player} */
    #client = null;

    /**  @param {import("bedrock-protocol").Player} client */
    constructor(client){
        this.#client = client;
    }

    /**
     * @param {string} message 
     * @param {string} xuid 
     * @param {Array} parameters 
     * @param {boolean} needsTranslation 
     * @param {number} type 
     */
    sendRawMessage(message, xuid = "", parameters = [], needsTranslation = false, type = TextType.Chat){
        if (!message) throw new Error("A message is required");

        const packet = new TextPacket();
        packet.type = type;
        packet.source_name = "";
        packet.message = message;
        packet.needs_translation = needsTranslation;
        packet.xuid = xuid;
        packet.platform_chat_id = "";
        packet.parameters = parameters;

        packet.send(this.#client);
    }

    /** @param {string} message */
    disconnect(message){
        this.#client.disconnect(message, false);
    }

    // TODO: Add player skin

    // TODO: Add custom skins / geometries

    /** @returns {string} */
    getClient(){
        return this.#client;
    }

}

module.exports = PlayerConnection;