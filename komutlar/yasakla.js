const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`ban` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.send(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(0).join(' ');
  let user = message.mentions.users.first();
  let log = guild.channels.find('name', 'log');
  if (!log) return message.channel.send(':no_entry: `log` kanalını bulamıyorum.');
  if (reason.length < 1) return message.channel.send(':no_entry: Neden Yasaklamak Istiyorsunuz?; `f?yasakla Reklam`');
  if (message.mentions.users.size < 1) return message.channel.send(':no_entry: Kimi banlayacağını yazmalısın; `f?yasakla Kullanıcı`').catch(console.error);

  if (!message.guild.member(user).bannable) return message.reply('Yetkilileri banlayamam.');
  message.guild.ban(user, 2);

  const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .addField('Eylem:', 'Ban')
    .addField('Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Sebep', reason);
  return guild.channels.get(log.id).send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'yasakla',
  description: 'İstediğiniz kişiyi yasaklar.',
  usage: 'yasakla [kullanıcı] [sebep]'
};
