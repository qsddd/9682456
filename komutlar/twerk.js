const Discord = require('discord.js') 
exports.run = (client, msg, args) => {
  if(msg.channel.nsfw || msg.channel.type ==='dm'){
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setImage(("https://media.giphy.com/media/3o6oziEt5VUgsuunxS/giphy.gif"))
    msg.channel.send(embed)
}
  else{
        msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: ('Bu kanal NSFW(Not Safe For Work) kanalı değil! Ayarlardan bunu açabilirsin!')
 }})
 }
};
 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: ['meme-at'],
   permLevel: 0
 };

 exports.help = {
   name: 'twerk',
   description: 'Twerk gifi gösterir.',
   usage: 'twerk'
 };
 