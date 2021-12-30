// const CommandBlockOutputGameRule = require("../src/bds/gamerule/CommandBlockOutputGameRule");
const PluginBase = require("../src/plugin/PluginBase");

class Example extends PluginBase{

    onEnable(){
        let server = this.getServer();
        let logger = server.getLogger();
        let listener = server.getListener();
            
        // let cogr = new CommandBlockOutputGameRule(false) // <-- Gamerule system
        // cogr.save(server);

        listener.on("player_create", (player)=>{
            // Gets runed when a new instance of the player gets made
            logger.info("Created instance for player with name " + player.getName());
        })

    }

}


module.exports = Example;