const Logger      = require("../../utils/Logger");
const https       = require("https");
const cp          = require("child_process")
const { resolve } = require("path");
const Server      = require("../../Server");

/**
 * @param {Object} 
 * @param {Logger} logger 
 */
module.exports = (config, logger) =>{
    new Promise(async (r, j)=>{
        const { installer }   = config;
        const { version, os } = installer;
        const vers            = version.split(".").slice(0, 3).join(".");
        let url               = ``;
    
        if (os !== "win" && os !== "linux") {
            throw Error(`unsupported os ${os}`)
        }
    
        logger.info("🔻 Downloading BDS");
        logger.warn("☕ Installation may take 1m take a break and get some coffee")
    
        process.chdir(resolve(__dirname, "./../../../server"));
    
        for (let i = 0; i < 8; i++) { 
            url = `https://minecraft.azureedge.net/bin-${os}/bedrock-server-${vers}.${String(i).padStart(2, "0")}.zip`;
            const res = await new Promise((resolve, reject) => https.request(url, { method: "HEAD" }, resolve).on("error", reject).end());
            if (res.statusCode === 200) {
                logger.info("📦 Found BDS");
                break;
            };        
        }
    
        cp.execSync(`curl -o bds.zip ${url}`);
    
        logger.info("⚡ Unziping BDS");
        if (process.platform === "linux")
            cp.execSync("unzip bds.zip && chmod +777 ./server");
        else 
            cp.execSync("tar -xf bds.zip");
    
        // Run server in other process
        // child_process.execSync("cmd.exe /K ./server/bds.exe");
    
        logger.info("🔥 Installation has been completed")
    
        process.chdir(resolve(__dirname, "./../../../"));

        r();
    }).then(() => new Server(config, logger));
}
