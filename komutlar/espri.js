const Discord = require('discord.js');
exports.run = function (client, message, args) {
    var request = require('request');

    request('http://api.eggsybot.xyz/espri', function (error, response, body) {
        if (error) return message.channel.send('Bir hata oluştu, daha sonra tekrar deneyin.');
        else if (!error) {
            var info = JSON.parse(body);
            const embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setDescription(info.soz)
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
    name: 'espri',
    description: 'Bot Espri Soler.',
    usage: 'espri'
};