const Discord = require("discord.js")

function isNowCooked(orderID, msg) {
    msg.channel.send(
        new Discord.RichEmbed()
        .setTitle("Order Cooked")
        .setColor("#00FF00")
        .setDescription("Order ID " + orderID + " is now cooked! :tada:")

    )
    orders[orderID].cooked = true
}

exports.run = (client, msg, args) => {
    var orders = {}
    var worker = user_id => client.guilds.get('294619824842080257').roles.get('362317801538584579');
    if (!worker(msg.author.id)) { return msg.channel.send(":x: You need to be a worker to use this.") }
    let oid = args[0]
    if (!oid) {
        return msg.channel.send("You can't cook nothing, silly.")
    }

    if (!orders[oid]) {
        return msg.channel.send("Non-existent order :/")
    }

    if (orders[oid].cooked) {
        return msg.channel.send("Already cooked. Cooking it again is a bad idea.")
    }
    if (orders[oid].claimed !== msg.author.id) {
        return msg.channel.send("This order hasn't been claimed yet or has been claimed by someone else :^)")
    }

    client.channels.get("361959461939707907").send(
        new Discord.RichEmbed()
        .setColor("#00FF00")
        .setTitle("Order now cooking")
        .setDescription("Order ID " + oid + " is now cooking :tada:")
        .setAuthor(msg.author.username, msg.author.displayAvatarURL)
    )

    msg.channel.send(
        new Discord.RichEmbed()
        .setColor("#FF0000")
        .setTitle("Order Cooking")
        .setDescription("Order ID " + oid + " is now cooking. This will take 5 seconds! o.O")

    )
    setTimeout(function() { isNowCooked(oid, msg) }, 5000)
    client.users.get(orders[oid].member).send("Your order has been cooked! Expect a delivery sometime near.")
}