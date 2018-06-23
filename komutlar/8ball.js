const Discord = require('discord.js')

const cevaplar = [
    "evet",
    "hayır",
    "belki",
    "olabilir",
    "tekrar sor",
    "anlamadım",
    "ben Simsek McQuenn",
    "What ?",
    "ne dedin ?",
    "asla",
    "imkansız",
    "iyi",
    "Lailik elden gidiyoah",
];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if(!soru) return message.channel.send(':no_entry: Bana Sormak Isdediniz Soruyu Yazarmısın?; `f?8ball naber?` ')
    else message.reply(cevap)
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: '8ball',
    description: '8Ball Soru Sorarsınız.',
    usage: '8ball'
  };