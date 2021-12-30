const Identifiers = require("./types/Identifiers");
const Packet      = require("./Packet");
const TextType    = require("./types/TextType");

class TextPacket extends Packet{

    type = 0;
    needsTranslation = true;
    sourceName = "";

    message = "";
    parameters = "";
    xuid = ""
    platformChatId = "";

    constructor(buffer) {
        super(buffer);
    }

    encode() {
        this.writeUnsignedVarInt(Identifiers.TextPacket);
        this.writeByte(this.type);
        this.writeBool(this.needsTranslation);

        switch (this.type) {
            case TextType.Chat:
            case TextType.Whisper:
            case TextType.Announcement:
                this.writeString(this.sourceName);
            case TextType.Raw:
            case TextType.Tip:
            case TextType.System:
            case TextType.JsonWhisper:
            case TextType.Json:
                this.writeString(this.message);
                break;

            case TextType.Translation:
            case TextType.Popup:
            case TextType.JukeboxPopup:
                this.writeString(this.message);
                this.writeUnsignedVarInt(this.parameters.length);
                for (const parameter of this.parameters) {
                    this.writeString(parameter);
                }

                break;
            default:
                throw new Error('Invalid TextType');
        }

        this.writeString(this.xuid);
        this.writeString(this.platformChatId);
    }

    /** @param {import("bedrock-protocol").Player} client */
    send(client){
        this.encode();
        client.sendBuffer(this.getBuffer());
    }



}

module.exports = TextPacket;