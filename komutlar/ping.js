const Discord = require('discord.js');


exports.run = function(client, message) {
   const ping = new Discord.RichEmbed()
   .setColor('RANDOM')
   .setDescription(`:ping_pong: Pingim:  ${client.ping}`)
   message.channel.send(ping)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ping','p'],
  permLevel: 4
};

exports.help = {
  name: 'ping', 
  description: 'Botun pingini gösterir',
  usage: 'ping' 
};