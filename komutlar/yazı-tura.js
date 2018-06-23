const Discord = require('discord.js');


exports.run = function(client, message) {
    var result = Math.floor((Math.random() * 2) + 1);
    if (result == 1) {
      const embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setDescription('Para `tura` Üstünde Durdu!')
      .setTitle('Para Atıldı!')
      .setImage('https://i.hizliresim.com/JDk2OE.png')
      .setTimestamp()
      message.channel.send(embed);
    } else if (result == 2) {
      const embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setDescription('Para `yazı` Üstünde Durdu!')
      .setTitle('Para Atıldı!')
      .setThumbnail('https://i.hizliresim.com/OD9My3.png')
      .setTimestamp()
      message.channel.send(embed);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'yazı-tura',
  description: 'Yazı Tura Atarsınız.',
  usage: 'yazı-tura'
};
