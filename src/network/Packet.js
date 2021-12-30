const BinaryStream = require("../utils/BinaryStream");

class Packet extends BinaryStream{

    constructor(buffer){
        super(buffer, 0); 
    }

    encode(){}
    
    writeString(v) {
        this.writeUnsignedVarInt(Buffer.byteLength(v));
        this.write(Buffer.from(v, 'utf8'));
    }
}

module.exports = Packet;