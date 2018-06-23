const Discord = require('discord.js');


exports.run = function(client, message) {
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .addField('Gecikme:', client.ping + ' ms', true)
    .addField('Kullanıcılar:', client.guilds.reduce((a, b) => a + b.memberCount, 0), true)
    .addField('Kanallar:', client.channels.size, true)
    .addField('Sunucular:', client.guilds.size, true)
    .addField('Bellek kullanımı:', (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2), true)
    .addField('Discord.JS sürümü:', Discord.version, true)
    .setTimestamp()
    message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['i'], 
  permLevel: 9 
};

exports.help = {
  name: 'istatistik',
  description: 'Botun Istatistiklerini Gosterir.',
  usage: 'istatistik'
};