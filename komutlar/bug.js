const Discord = require('discord.js');
const hook = new Discord.WebhookClient('460067395487137802', 'QvKIlkoDmjn5xJ9vgXRPr5_J65FOj8uENzxQd1wbOJ__XBK8OUBVshder47WzutawZ87');

exports.run = (client, message, args) => {
    let reason = args.slice(0).join(' ');
if (reason.length < 1) return message.channel.send(':no_entry: Lütfen **botun sahibine** iletmemi istediğiniz mesajı girin; `f?tavsiye Lütfen daha fazla özellik gelsin!`');
  hook.send('**:e_mail:  | Yeni bir postan var!**\n**|Kişi**: ' + message.author.username + '\n**|Kişi ID**: ' + message.author.id +'\n**|Bildirilen Bug**: '  + reason + '')
  const sonuc = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription('Bug Bildirildi En Kısa Zamanda Geri Donus Yapılacak.')
  return message.channel.sendEmbed(sonuc);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bug',
  description: 'Botun Sahibine Bug Bildirirsiziniz.',
  usage: 'bug'
};
