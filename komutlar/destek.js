const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor('RANDOM')
    .addField('Özel mesajları kontrol et', 'Destek bilgilerini özel mesaj olarak yolladım.')
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor(0xD97634)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Destek Almak Icin Destek Sunucumuz : https://discord.gg/QJscvdB');
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 0
};

exports.help = {
  name: 'desteksunucu',
  description: 'Botun Destek Sunucusunu Gonderir.',
  usage: 'davet'
};
