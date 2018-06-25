const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription('Davet Link: (https://discordapp.com/oauth2/authorize?client_id=458726579397197825&scope=bot&permissions=2146958591)')
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Botun pingini gösterir',
  usage: 'davet'
};
