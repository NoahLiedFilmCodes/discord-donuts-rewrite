const { Client } = require("discord.js")
const client = new Client({
    disableEveryone: true,
    autoReconnect: true
});
const fs = require("fs");
const config = require("./modules/config.json");
const logger = require("./modules/logger.js");

function loadRestricted() {
    fs.readFile("./commands/blacklist.json", 'utf8', function(err, data) {
        if (err) console.log(err)
        silenced = JSON.parse(data)
    })
}

client.on('ready', () => {
    logger.notify("Discord Donuts has connected to Discord!")
    loadRestricted()
});

client.on("message", message => {
    if (message.author.bot) return;
    if (message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args, config);
        logger.notify("Ran command")
    } catch (err) {
        logger.error(err);
    }
});

client.login(config.token);