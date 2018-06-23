const Discord = require('discord.js');


exports.run = function(client, message) {
const eğlence = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription('duyuru: Sunucuda Duyuru yapmanızı sağlar.\ntemizle: Bot Discord Chat Temizler.\nyasakla: İstediğiniz kişiyi yasaklar.\noylama: Sunucuda Oylama Yaparsınız.')
.setTitle('» Moderatör Komutları')
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
  name: 'moderatör', 
  description: 'Botun pingini gösterir',
  usage: 'moderatör' 
};
