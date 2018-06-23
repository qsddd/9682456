const Discord = require('discord.js');

exports.run = function(client, msg, args) {
    let type = args.slice(0).join(' ');
        if (type.length < 1) return msg.channel.send(
    new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(msg.author.tag + ', Kullanım: f?tavsiye <tavsiye>.')
    .setFooter('Fredux', client.user.avatarURL)
    .setTimestamp());
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(':open_file_folder: Tavsiyeniz Başarıyla Gönderildi ! En kısa 3 günde size dönüş olacak')
    .setFooter('Fredux', client.user.avatarURL)
    .setTimestamp()
    msg.channel.send(embed);
    const embed2 = new Discord.RichEmbed()
    .setColor('RANDOM')
    .addField('Tavsiye:', type, true)
    .addField('Kullanıcı:', msg.author.tag, true)
    .addField('Sunucu:', msg.guild.name, true)
    .setFooter('Fredux', client.user.avatarURL)
    .setTimestamp()
    client.channels.get('460039670487580672').send(embed2);

};

exports.conf = {
    aliases: [],
  };

exports.help = {
  name: 'tavsiye',
  description: 'Botun Sahibine Tavsiye Bildirirsiniz.',
  usage: 'tavsiye [mesaj]'
};
