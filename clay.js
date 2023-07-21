const {PermissionsBitField, EmbedBuilder, ButtonStyle, Client, GatewayIntentBits, ChannelType, Partials, ActionRowBuilder, SelectMenuBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, InteractionType, SelectMenuInteraction, ButtonBuilder } = require("discord.js");
const { Collection } = require("discord.js");
const fs = require("fs");
const Discord = require("discord.js")
const moment = require('moment')
const { WebSocketShard } = require('discord.js');
require('moment-duration-format')
moment.locale('tr')


const client = global.client = new Client({
  partials: [
    Partials.Message, 
    Partials.Channel, 
    Partials.GuildMember, 
    Partials.Reaction, 
    Partials.GuildScheduledEvent, 
    Partials.User, 
    Partials.ThreadMember, 
  ],
  intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMembers, 
    GatewayIntentBits.GuildBans, 
    GatewayIntentBits.GuildEmojisAndStickers, 
    GatewayIntentBits.GuildIntegrations, 
    GatewayIntentBits.GuildWebhooks, 
    GatewayIntentBits.GuildInvites, 
    GatewayIntentBits.GuildVoiceStates, 
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMessages, 
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMessageTyping, 
    GatewayIntentBits.DirectMessages, 
    GatewayIntentBits.DirectMessageReactions, 
    GatewayIntentBits.DirectMessageTyping, 
    GatewayIntentBits.MessageContent,
  ],

});

module.exports = client;
require("./events/message.js")
require("./events/ready.js")
const ayarlarData = fs.readFileSync('ayarlar.json');
const ayarlar = JSON.parse(ayarlarData);
client.ayarlar = ayarlar;

client.login('BOT_TOKEN').catch(e => {})

client.ws.setMaxListeners(20); // Change the number according to your needs


Promise.prototype.sil = function (time) {
    if (this) this.then(s => {
        if (s.deletable) {
            setTimeout(async () => {
                s.delete().catch(e => { });
            }, time * 1000)
        }
    });
};


fs.readdir("./commands/", (err, files) => {
if (err) console.error(err);
console.log(`Toplam ${files.length} komut var!`);
files.forEach(f => {
let props = require(`./commands/${f}`);
    
console.log(`${props.help.name}.js Komutu aktif!`);
    
client.commands.set(props.help.name, props);
props.conf.aliases.forEach(alias => {
client.aliases.set(alias, props.help.name);
});
});
});
