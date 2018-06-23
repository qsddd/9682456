//const Discord = require('discord.js');
//const ayarlar = require('../ayarlar.json');

//var prefix = ayarlar.prefix;

//exports.run = (client, message, params) => {
    //if (!params[0]) {
        //const commandNames = Array.from(client.commands.keys());
      //  const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
      //  const ozelkomutlar = new Discord.RichEmbed()
      //  .setColor('RANDOM')
       /// .setTitle('» Tüm Komutlar')
      //  .setTimestamp()
      //  .setFooter('© 2018 Fredux', client.user.avatarURL)
      //  .setDescription(`${client.commands.map(c => `${ayarlar.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)}: ${c.help.description}`).join('\n')}`)
      //  message.author.send(ozelkomutlar)
    //  if (message.channel.type !== 'dm') {
     //   const ozelmesajkontrol = new Discord.RichEmbed()
     //   .setColor('RANDOM')
     //   .addField('Özel mesajları kontrol et', 'Komutları özel mesaj olarak yolladım.')
    //    message.channel.send(ozelmesajkontrol) }
  //    } else {
    //    let command = params[0];
     ///   if (client.commands.has(command)) {
     ///     command = client.commands.get(command);
     ///     const err = new Discord.RichEmbed()
     ///     .setColor('RANDOM')
      ///    .setDescription(`${command.help.name}\n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`)
      ///    .setTimestamp()
     ///     message.author.send(err)
     //   }
    //  }
//};

//exports.conf = {
//  enabled: true,
// guildOnly: false,
//  aliases: ['h', 'halp', 'help', 'y'],
///  permLevel: 0
//};

//exports.help = {
//  name: 'yardım',
 // description: 'Tüm komutları gösterir.',
//  usage: 'yardım [komut]'
//};