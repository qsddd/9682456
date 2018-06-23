const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(':warning: Uyarı :warning:', '`sunucubilgi` adlı komutu özel mesajlarda kullanamazsın.')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setThumbnail(message.guild.iconURL)
    .addField('**Sunucu Adı**', message.guild.name)
    .addField('**Sunucu ID**', message.guild.id)
    .addField('**Sunucu Bölgesi**', message.guild.region)
    .addField('**Üye sayıları**', message.guild.memberCount)
    .addField('**AFK Durma Süresi**', message.guild.afkTimeout)
    .addField('**Bot Sayısı**', message.guild.members.filter(m => m.user.bot).size)
    .addField('**Rol Sayısı**', message.guild.roles.size)
    .addField('**Emoji Sayısı**', message.guild.emojis.size)
    .addField('**Oluşturan**', message.guild.owner + ' (' + message.guild.ownerID + ')')
    .addField('**Kanal sayısı**', message.guild.channels.size)
    .addField('**Yazı Kanalları**', message.guild.channels.filter(c => c.type === "text").size)
    .addField('**Ses Kanalları**', message.guild.channels.filter(c => c.type === "voice").size)
    .addField('**Oluşturma Tarihi**', message.guild.createdAt)
    return message.channel.send(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sbilgi'],
  permLevel: 0
};

exports.help = {
  name: 'sunucubilgi',
  description: 'Sana Sunucu Bilgilerini Verir.',
  usage: 'sunucubilgi'
};
