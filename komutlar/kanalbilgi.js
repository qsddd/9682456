const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(':warning: Uyarı :warning:', '`kanalbilgi` adlı komutu özel mesajlarda kullanamazsın.')
    return message.author.send(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setThumbnail(message.guild.iconURL)
    .addField('**Kanal Adı**', message.channel.name, true)
    .addField('**Konusu**', message.channel.topic ? message.channel.topic : 'No Konu', true)
    .addField('**NSFW Kanalımı**', message.channel.nsfw ? 'Evet' : 'Hayır', true)
    .addField('**Kanalın ID**', message.channel.id, true)
    .addField('**Pozisyon**', message.channel.position, true)
    .addField('**Kanalın Tipi**', message.channel.type, true)
    return message.channel.send(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kanalbilgi',
  description: 'Oldunuz Kanalın Bilgisini Verir.',
  usage: 'kanalbilgi'
};
