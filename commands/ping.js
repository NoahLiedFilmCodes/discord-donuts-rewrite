exports.run = (client, msg, args) => {
    msg.edit(`Pong! The ping is **${(client.ping).toFixed(0)}**ms! :ping_pong:`)
}