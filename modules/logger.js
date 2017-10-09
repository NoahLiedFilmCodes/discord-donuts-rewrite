/**
 * @file A smexy logger!
 * @author August (https://ohlookitsAugust.space | [YumiBoat] August#1793)
 * @author lordjbs 
 * @author Capuccino (chinodesuuu@gmail.com | Enra #0080)
 * @license Apache-2.0
 **/

let chalk = require("chalk");

class Logger {
    /**
     * Notifying stuff!
     * @param {String} message - The message to print out
     * @static
     */

    static notify(message) {
            return console.log(`${chalk.bgMagenta("[NOTIFY]")} - ${chalk.white(`${message}`)}`);
     }
     
   /**
     * Giving you a spoopy warning o.O
     * @param {String} message - The message to print out
     * @static
     */
     
     static warn (message) {
        return console.warn(`${chalk.bgYellow("[WARN]")} - ${chalk.white(message)}`);
     }
     
   /**
     * Sending a error! oWo
     * @param {String} message - The message to print out
     * @static
     */
     
     static error (message) {
        return console.error(`${chalk.bgRed("[ERROR]")} - ${chalk.white(message)}`);
     }
     
   /**
     * Debugging shit!
     * @param {String} message - The message to print out
     * @static
     */
     
     static debug (message) {
        return console.log(`${chalk.bgWhite("[DEBUG]")} - ${chalk.white(message)}`);
     }
  }
  
  module.exports = Logger;