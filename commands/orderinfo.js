const Discord = require("discord.js")

exports.run = (client, msg, args) => {
    var worker = user_id => client.guilds.get('294619824842080257').roles.get('362317801538584579');
    let oid = args[0]
    if (args[0] == undefined || args[0] == null) {
        return msg.channel.send("You need an order ID to view.")
    }
    if (orders[oid] == undefined) {
        return msg.channel.send("This order does not exist.")
    }
    msg.channel.send(
        new Discord.RichEmbed()
        .setAuthor(msg.author.username, msg.author.displayAvatarURL)
        .setTitle("Order Information")
        .setColor("#00FF00")
        .setDescription("Order Information for order ID " + args[0] + "\nOrder: `" + orders[oid].task + "`\nSet by: " + client.users.get(orders[oid].member).username + "\non guild: " + client.guilds.get(orders[oid].guild).name)
    )
}