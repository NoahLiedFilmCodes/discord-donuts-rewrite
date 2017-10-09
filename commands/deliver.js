const Discord = require("discord.js")

exports.run = (client, msg, args) => {
    var worker = user_id => client.guilds.get('294619824842080257').roles.get('362317801538584579');
    var orders = {}
    if (!worker(msg.author.id)) { msg.channel.send(":x: You need to be a worker to use this.") }
    let oid = args[0]
    if (!oid) {
        return msg.channel.send("What do you want to deliver?")
    }
    if (!orders[oid]) {
        msg.channel.send("This order does not exist.")
    }

    if (orders[oid].claimed !== msg.author.id) {
        return msg.channel.send("This order hasn't been claimed yet or has been claimed by someone else. You can't cook someone else's orders!")
    }
    if (orders[oid].cooked == false) {
        msg.channel.send("Cook the donut first, otherwise we'll have angry customers and I'll fire you :^)")
    }

    client.channels.get("296360728267456512").send(
        new Discord.RichEmbed()
        .setColor("#00FF00")
        .setTitle("Order now being delivered")
        .setDescription("Order ID " + oid + " is now being delivered by " + msg.author.username + " on guild " + client.guilds.get(orders[oid].guild).name)
        .setAuthor(msg.author.username, msg.author.displayAvatarURL)
    )
    msg.channel.send("Delivery person, check your DMs. :mailbox_with_mail:")
    let order = orders[oid].task
    let invite = client.channels.get(orders[oid].channel).createInvite().then(invite => {
        msg.author.send("You are delivering " + order + ".\nInstant Invite Link: " + invite.url)
    })
    orders[oid] = undefined
}