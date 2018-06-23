const Discord = require('discord.js');
const translate = require('node-google-translate-skidz');


exports.run = function(client, message, args) {
    let targetLang = args[0];
    if(!targetLang) return message.channel.send(":no_entry: Cevirmek Isdediniz Mesaj ve Dil Nedir?; `f?translate en Merhaba`");
    if(targetLang.length > 2) return message.channel.send(":no_entry: Lütfen Bir Dil Git; `f?translate en`");
    var translateText = args.slice(1).join(" ");
    if(!translateText) return message.channel.send(`:no_entry: Çevirmek istediğiniz "${targetLang}" dili yazın..`);

    translate({
      text: translateText,
      target: targetLang
    }, function(result) {
      var translatedText = result.translation
      const embed = new Discord.RichEmbed()
      .setAuthor(`Çeviri`, message.author.avatarURL)
      .setColor(0x00AE86)
      .addField("Mesaj:", "**```" + translateText + "```**")
      .addField(`Çevrilen Mesaj: ${targetLang}`, "**```" + translatedText + "```**")
      .setFooter(`${message.author.tag} tarafından istendi!`, client.user.avatarURL)
      message.channel.send({embed})
        .catch(error => message.channel.send(`Üzgünüm ${message.author.tag} Sana embed şeklinde yollayamıyorum: ${error}`))
    });
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 0
};

exports.help = {
  name: 'translate', //adını belirledik (kullanmak için gereken komut)
  description: 'Yazdınız Mesajı Farklı Bir Dile Cevirir.', //açıklaması
  usage: 'translate' 
};
