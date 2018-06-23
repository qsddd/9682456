const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription('+ Komutlar Menusu Yenilendi.\n+ Yeni Komutlar Eklendi. +20')
message.channel.send(embed)
};

exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'yenilikler', //adını belirledik (kullanmak için gereken komut)
  description: 'Botun pingini gösterir', //açıklaması
  usage: 'yenilikler'
};
