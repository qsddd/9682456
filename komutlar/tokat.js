const Discord = require('discord.js')

const cevaplar = [
    "http://www.gifsitesi.com/gif-baglanti/IJG9P5hWIVkN/tokat.gif",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAa1QTPds0jlAhnQbWovavFpAyxjkVHK4s-jJ9rFrmQfT3xWcM",
    "https://media1.tenor.com/images/b980428d9ab96cc24e690ec9b00a783f/tenor.gif?itemid=7205678",
    "http://gifgalaksi.com/upload/re.gif",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSboByZaj80lyJ9pfQ_EfjoROjr27FcYK2UNraa4-nidyT1Foti",
    'https://media0.giphy.com/media/v46LcOJxM5viM/giphy.gif',
    'https://media0.giphy.com/media/14rv9SHIEsd1h6/giphy.gif',
    'https://media1.giphy.com/media/Qvwc79OfQOa4g/giphy.gif',
    'https://media3.giphy.com/media/A7sn49WP5Hkpa/giphy.gif',
    'https://media2.giphy.com/media/qjErVxh9qkdpu/giphy.gif',
    'https://media3.giphy.com/media/MV3vvchfYR3Py/giphy.gif',
];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if(!soru) return message.channel.send(':no_entry: Tokatlamak için birini etiketlemelisiniz; `f?tokat @Fredux` ')
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .addField(`${message.author.username} Sana Tokat Attı.`, soru )
    .setImage(cevap)
    message.channel.send(embed)
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'tokat',
    description: 'Etiketlediniz Kisiye Tokat Atar.',
    usage: 'tokat'
  };