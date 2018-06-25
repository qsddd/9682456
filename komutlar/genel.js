const Discord = require('discord.js');


exports.run = function(client, message) {
const eğlence = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription('davet : Botun Davet Link Gonderir.\nbug: Botun Sahibine Bug Bildirirsiziniz.\ndesteksunucu: Botun Destek Sunucusunu Gonderir.\ndiscrim: Belirtilen Tag a sahip kişileri belirtir.\nhavadurumu: Verdiğiniz konumun hava Durumunu Gösterir.\nkanalbilgi: Oldunuz Kanalın Bilgisini Verir.\nmc-sunucu: Minecraft sunucu bilgisini verir.\npiksel: İstediğiniz Kisinin Resmini Piksel Yaparsiniz.\nping: Botun pingini gösterir\nroller: Sunucudaki Rolleri Gosterir.\nsaat: Oldunuz Yerin Saatini Gosterir.\nsunucubilgi: Sana Sunucu Bilgilerini Verir.\nsunucuresmi: Sunucu Resminin Linkini Atar.\ntavsiye: Botun Sahibine Tavsiye Bildirirsiniz.\ntranslate: Yazdınız Mesajı Farklı Bir Dile Cevirir.\nyazı-tura: Yazı Tura Atarsınız.\nyenilikler: Bota Yenilikleri Gosterir.')
.setTitle('» Genel Komutlar')
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
  name: 'genel', 
  description: 'Botun pingini gösterir',
  usage: 'genel' 
};
