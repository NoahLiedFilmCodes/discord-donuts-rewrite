const Discord = require("discord.js")
const chancejs = require("chance")
const chance = new chancejs()

exports.run = (client, msg, args) => {
    var orders = {}
    if (args[0] == undefined || args[0] == null) { return msg.channel.send("What do you want to order? [Command not executed]") }
    let oid = chance.string({ pool: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", length: 8 })
    client.channels.get("361959461939707907").send(
        new Discord.RichEmbed()
        .setColor("#00FF00")
        .setTitle("New Order!")
        .setDescription("New order from server `" + msg.guild.name + "` (" + msg.guild.id + ")\nby user " + msg.author.username + "#" + msg.author.discriminator + " (" + msg.author.id + ")\nOrder: `" + args.join(" ") + "`\nOrder ID: " + oid)
        .setAuthor(msg.author.username, msg.author.displayAvatarURL)
    )
    msg.channel.send("You ordered " + args.join(" ") + ". The order will be in the kitchen straight away! Your order ID is " + oid)
    orders[oid] = { "task": args.join(" "), "member": msg.author.id, "guild": msg.channel.guild.id, "channel": msg.channel.id, "cooked": false, "claimed": undefined }
}