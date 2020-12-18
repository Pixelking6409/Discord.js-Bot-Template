const Discord = require("discord.js")

module.exports = {
    name: "test",

    run (client, message) {
        message.channel.send("Test Successful!!")
    }
}