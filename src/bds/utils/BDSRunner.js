const Logger   = require("../../utils/Logger");
const fs       = require("fs");
const cp       = require("child_process");
const readline = require('readline');

class BDSRunner{

    /** @type {cp.ChildProcess} */
    #child = null;

    /** @param {Logger} logger */
    constructor(logger){
        fs.writeFileSync("./server/server.properties", fs.readFileSync(`./default.properties`).toString());

        const exe = process.platform === "win32" ? "./server/bedrock_server.exe" : "./server";
        this.#child = cp.spawn(exe, [], {
            stdio: ['pipe', process.stdout, process.stderr]
        });

        this.read();
        
        logger.info("🎉 Running BDS");
    }

    // THIS METHOD ALLOWES US TO USE COMMAND IN THE CMD
    read(){
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.on("line", (cmd)=>{
            this.sendCommand(cmd)
        });
    }


    sendCommand(command) {
        this.#child.stdin.write(`${command}\n`)
    }


}

module.exports = BDSRunner;