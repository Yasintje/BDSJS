const Server       = require("./src/Server");
const fs           = require("fs");
const Logger       = require("./src/utils/Logger.js");
const config       = require("./config.json");
const BDSInstaller = require("./src/bds/utils/BDSInstaller");
const BDSRunner    = require("./src/bds/utils/BDSRunner");

// Create instances
let logger = new Logger();

// Dowload the bds from mojang and run it
if(!fs.existsSync("./server/")){
    fs.mkdirSync("server")
    BDSInstaller(config, logger);
    return;
}

new Server(config, logger);