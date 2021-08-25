const Discord = require("discord.js")
const client = new Discord.Client()
client.on("ready", () =>{
 console.log("Bot aktif tutuluyor  : " +client.user.username)   
})
client.login("") 
