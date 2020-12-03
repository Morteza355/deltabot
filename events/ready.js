const Discord = require("discord.js")
const { client, config } = require("../index.js")

client.on("ready", () => {

    console.log("|\n|    Advanced MassDM\n|   Made by :)\n|\n| Last Update: 16.6.2020\n|")

    client.user.setActivity("/help", { type: "LISTENING" }).catch(console.error);

})