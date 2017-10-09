const fs = require("fs")

function saveRestricted() {
    fs.writeFile("./restricted.json", JSON.stringify(silenced), function(err) {
        if (err) {
            return console.log(err)
        }
    });
}

exports.run = (client, msg, args, blacklist) => {
    if (args[0] == "user") {
        let user = msg.mentions.users.first()
        if (user == undefined || user == null) {
            return msg.channel.send("Syntax: unblacklist <user/id/guild> <user @mention/user id/guild id>")
        }
        msg.channel.send("Un-blacklisting user " + user.username + " (" + user.id + ").")
        silenced[user.id] = { "type": "user", "active": false }
    } else if (args[0] == "id") {
        let id = args[1]
        if (id == undefined || id == null) {
            return msg.channel.send("Syntax: unblacklist <user/id/guild> <user @mention/user id/guild id>")
        }
        msg.channel.send("Un-blacklisting user ID " + id + ".")
        silenced[id] = { "type": "user", "active": false }
    } else if (args[0] == "guild") {
        let id = args[1]
        if (!id) {
            return msg.channel.send("Syntax: unblacklist <user/id/guild> <user @mention/user id/guild id>")
        }
        msg.channel.send("Un-blacklisting guild ID " + id + " (guild " + bot.guilds.get(id).name + ")")
        silenced[id] = { "type": "guild", "active": false }
    }
    saveRestricted()
}