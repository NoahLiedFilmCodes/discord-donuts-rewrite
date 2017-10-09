const Discord = require("discord.js")

exports.run = (client, msg, args) => {
    var orders = {}
    var worker = user_id => client.guilds.get('294619824842080257').roles.get('362317801538584579');
    if (!worker(msg.author.id)) { return msg.channel.send(":x: You need to be a worker to use this command.") }
    let oid = args[0]
    if (!orders[oid]) { return msg.channel.send("Order non-existent.") }
    if (!oid) { return msg.channel.send("What do you wanna claim?") }
    if (orders[oid].claimed == undefined) {

        orders[oid].claimed = msg.author.id
        msg.channel.send("You have claimed " + args[0])
    } else {
        msg.channel.send("This order is already claimed :^)")
    }
}