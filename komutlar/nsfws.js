const Discord = require('discord.js');


exports.run = function(client, message) {
const eğlence = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription('twerk: Twerk gifi gösterir.\nnsfw: NSFW bir resim gösterir.')
.setTitle('» Nsfw Komutları')
.setFooter('© 2018 Fredux', client.user.avatarURL)
message.channel.send(eğlence)
};

exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'nsfw', 
  description: 'Botun pingini gösterir',
  usage: 'nsfw' 
};
