const Discord = require('discord.js');
exports.run = function (client, message, args) {
    var request = require('request');

    request('http://api.eggsybot.xyz/ataturk', function (error, response, body) {
        if (error) return message.channel.send('Bir hata oluştu, daha sonra tekrar deneyin.');
        else if (!error) {
            var info = JSON.parse(body);
            const embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setImage(info.link)
            message.channel.send(embed);
        }
    });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'atatürk',
    description: 'Rastgele Atatürk Resmi Atar.',
    usage: 'atatürk'
};