const Discord = require('discord.js');


exports.run = function(client, message) {
const eğlence = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription('8ball: 8Ball Soru Sorarsınız.\nascii: İstediğiniz şeyi Ascii Cevirir.\natatürk: Rastgele Atatürk Resmi Atar.\nbulanık: İstediğiniz Kisinin Profil Resmini Bulanık Yaparsınız.\nemoji-yazı: Yazdınız Yazıyı Emoji Seklinde Size Geri Gonderir.\nespri: Bot Espri Soler.\nhastebin: Yazdınız Kelimeyi Hastebin çevirir.\nmc-sunucu: Minecraft sunucu bilgisini verir.\nkapaklaflar: Etiketlediniz Kisiye Kapak Laflar Soler.\nsaat: Oldunuz Yerin Saatini Gosterir.\ntokat: Etiketlediniz Kisiye Tokat Atar.\naşkölçer: Sevdiniz Kisinin Ask Olcer Soler.')
.setTitle('» Eğlence Komutları')
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
  name: 'eğlence', 
  description: 'Botun pingini gösterir',
  usage: 'eğlence' 
};
