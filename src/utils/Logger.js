const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

class Logger{

    /** @type {import("winston").Logger} */
    #logger;

    constructor(){
        const myFormat = printf(({ level, message, label, timestamp }) => {
            return `${timestamp} ${label} [${level}]: ${message}`;
          });
          
        this.#logger = createLogger({
            format: combine(
                label({ label: '[BDSJS]' }),
                timestamp({ format: "H:m:s" }),
                myFormat
            ),
            transports: [new transports.Console()]
        });

    }

    /**@param {string} message */
    info(message){
        this.#logger.info(message);
    }

    /**@param {string} message */
    warn(message){
        this.#logger.warn(message);
    }

    /**@param {string} message */
    debug(message){
        this.#logger.debug(message);
    }

    /**@param {string} message */
    error(){
        this.#logger.error(message);
    }

}

module.exports = Logger;