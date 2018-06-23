const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let guild = message.guild
	let duyurular = guild.channels.find('name', 'oylama');
	if (!duyurular) return message.reply('`oylama` kanalını bulamıyorum.');
    let mesaj = args.slice(0).join(' ');

    if (mesaj.length < 1) return message.reply(':no_entry: Anketin Acıklamasını Yazmalısın.; `f?oylama Sunucuya Roller Gelsin.`');
    message.delete();
    var emojiList = ['👍','👎'];
    const embed = new Discord.RichEmbed()
    .setColor(0xD97634)
    .setDescription(`Oylama\nSoru : ${mesaj}\nAnket Sahibi : ${message.author.tag}`)
    guild.channels.get(duyurular.id).sendEmbed(embed);
    message.react('👍')
    message.react('👎')

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'oylama',
  description: 'Sunucuda Oylama Yaparsınız.',
  usage: 'oylama [yazı]'
};