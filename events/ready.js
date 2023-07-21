const client = require("../clay");
const Discord = require("discord.js")
const fs = require("fs")
client.on("ready", () => {
console.log(`${client.user.tag} Aktif!`)
        setInterval(() => {
      const oynuyor = client.ayarlar.BotDurum
      const index = Math.floor(Math.random() * (oynuyor.length));
      client.user.setPresence({
                activities: [{
                    name: `${oynuyor[index]}`, 
                    url: "https://www.twitch.tv/clay17k",
                    type: Discord.ActivityType.Streaming
                }],
                });
    }, 10000);
 

  
});
