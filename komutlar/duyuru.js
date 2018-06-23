const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let guild = message.guild
	let duyurular = guild.channels.find('name', 'duyurular');
	if (!duyurular) return message.reply('`duyurular` kanalını bulamıyorum.');
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.channel.send(':no_entry: Duyurmak Isdediniz Konunun Basligi?; `f?duyuru Onemli.`');
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle(`${message.guild.name} Duyuru !`)
    .setDescription(`${mesaj}`)
    .setThumbnail(message.author.avatarURL)
    .setFooter(`Fredux Duyuru Sistemi`)
    return guild.channels.get(duyurular.id).send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['duyuru', 'duyuruyap'],
  permLevel: 0
};

exports.help = {
  name: 'duyuru',
  description: 'Sunucuda Duyuru yapmanızı sağlar.',
  usage: 'duyuru [yazı]'
};