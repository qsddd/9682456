const Discord = require('discord.js');


exports.run = function(client, message, args) {
    if(message.author.id === "380753087012405249") {
        let mesaj = args.slice(0).join(' ');
        if (mesaj.length < 1) return message.channel.send(':no_entry: Gondermek Isdediniz Mesak?; `f?cevapla Tesekkurler`');
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setDescription('')
        .setFooter('Fredux Tavsiye Cevaplama')
        message.channel.send(embed)
    } else {
        message.channel.send(':no_entry: Bu Komut Developer Kodudur.');
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'cevapla',
  description: 'cevapla',
  usage: 'cevapla'
};
