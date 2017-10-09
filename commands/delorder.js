const Discord = require("discord.js")

exports.run = (client, msg, args) => {
    var orders = {}
    var worker = user_id => client.guilds.get('294619824842080257').roles.get('362317801538584579');
    let oid = args[0]
    if (!worker(msg.author.id)) { return msg.channel.send("This command is for Workers only.") }
    if (orders[oid] == undefined) { return msg.channel.send("Order ID invalid.") }
    let reason
    if (args[1]) {
        reason = args.slice(1).join(" ")
    } else {
        reason = "[No reason specified]"
    }
    client.channels.get("361959461939707907").send(
        new Discord.RichEmbed()
        .setColor("#FF0000")
        .setTitle("Order deleted")
        .setDescription("Order ID " + oid + " has been deleted by " + msg.author.username + " for reason `" + reason + "`")
        .setAuthor(msg.author.username, msg.author.displayAvatarURL)
    )
    client.users.get(orders[oid].member).send("Your order has been deleted by " + msg.author.username + " for reason `" + reason + "`")
    orders[oid] = undefined
    msg.channel.send("Deleted order " + oid)
}