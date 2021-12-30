const { Relay }     = require("bedrock-protocol");
const Logger        = require("./utils/Logger");
const Player        = require("./player/Player.js");
const BDSRunner     = require("./bds/utils/BDSRunner");
const EventListener = require("./utils/EventListener");
const PluginBase    = require("./plugin/PluginBase");

class Server{

    /** @type {Map<string, Player>} */
    #players = new Map();

    /** @type {Logger} */
    #logger = null;

    /** @type {BDSRunner} */
    #runner = null;

    /** @type {EventListener} */
    #listener = null;

    /** @type {PluginBase[]} */
    #plugins = [];

    /**
     * @param {Object} { host, port, server, maxPlayers }
     * @param {Logger} logger 
     * @param {Server} runner
     */
    constructor({ host, port, server, maxPlayers }, logger){
        this.#logger     = logger;
        this.#runner     = new BDSRunner(this.#logger);
        this.#listener   = new EventListener(); // CREATE THE MAIN EVENT LISTENER
        
        this.connection = new Relay({
            host: host, 
            port: port,

            version: "1.18.0",
            maxPlayers: maxPlayers,

            destination:{
                host: server["vhost"], 
                port: server["vport"],    
            }
        });

        this.connection.on("connect", (player)=>{
            // CREATE OR DELETE PLAYER
            player.on("join", ()=> this.#players.set(player.userData.displayName, new Player(player, this)));
            player.on("close", ()=> this.#players.delete(player.userData.displayName));

            player.on("clientbound", ({name, params})=>{


                              
            });
            
            player.on("serverbound", ({name, params})=>{


            });
        })

        this.connection.listen();

        // Load all plugin files
        require("../plugin/plugins").forEach(pluginFile => {
            let Plugin = require(`../plugin/${pluginFile}`);
            let plugin = new Plugin(this);
            plugin.onEnable();

            this.#plugins.push(plugin);
        });
    }

    /** @returns {Map<string, Player>} */
    getPlayers(){
        return this.#players;
    }

    /** @returns {Logger} */
    getLogger(){
        return this.#logger;
    }

    /** @returns {BDSRunner} */
    getRunner(){
        return this.#runner;
    }

    /** @type {EventListener} */
    getListener(){
        return this.#listener;
    }

}

module.exports = Server;