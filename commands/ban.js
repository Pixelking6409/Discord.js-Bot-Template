const Discord = require("discord.js")

module.exports = {
    name: "ban",
    args: true,
    usage: "<user>",
    description: "Ban a user",

    run(client, message, args) {

        const target = mentions.users.first() || message.guild.members.cache.get(args[0]);

        if (!member.hasPermission("BAN_MEMBERS"))
            return message.reply(
                "Sorry you do not have the permissions to use this command!"
            );

        if (!message.guild.me.hasPermission("BAN_MEMBERS"))
            return message.channel.send("I don't have the right permissions.");

        if (!args[0]) {
            return msg.reply(`Please mention a user`);
        }

        if (!target.bannable) {
            return message.channel.send("I cant ban this member")
        }

        let reason = args.slice(1).join(" ");

        if (!reason) reason = 'Unspecified';

        if(target.id === message.author.id) return message.channel.send('Bruh, you can\'t ban yourself!');  

        if (target) {
            const targetMember = message.guild.members.cache.get(target.id);
            targetMember.ban(`${reason}`)
                .catch(err => {
                    if (err) return message.channel.send('Something went wrong')
                })
            const banembed = new Discord.MessageEmbed()
                .setTitle('Member Banned')
                .setThumbnail(member.user.displayAvatarURL())
                .addField('User Banned', target)
                .addField('Kicked by', message.author)
                .addField('Reason', reason)
                .setFooter('Time kicked', client.user.displayAvatarURL())
                .setTimestamp()
            message.channel.send(banembed);
        }
    }
}