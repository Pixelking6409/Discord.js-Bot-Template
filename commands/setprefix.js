const db = require('quick.db')

module.exports = {
    name: "setprefix",
    args: true,
    usage: "<prefix>",
    description: "Set a prefix",

    async run (client, message, args) {
        if(!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send('You need MANAGE_SERVER to use this command');

        if(!args[0]) return message.channel.send('Please provide a new prefix');

        db.set(`${message.guild.id}_prefix`, args[0])

        let prefix = await db.get(`${message.guild.id}_prefix`)

        message.channel.send(`Prefix has changed to ${prefix}`)
    }
}