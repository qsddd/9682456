const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (bot, message, params) => {
   const embed = new Discord.RichEmbed()
   .setColor('RANDOM')
   .addField('Roller:', message.guild.roles.map(role => role.name).join(' **|** '), true)
   message.channel.send({embed});
 };

 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: [],
   permLevel: 0
 };

 exports.help = {
   name: 'roller',
   description: 'Sunucudaki Rolleri Gosterir.',
   usage: 'roller'
 };