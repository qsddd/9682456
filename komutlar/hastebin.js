const hastebin = require('hastebin-gen');

exports.run = (client, msg, args) => {
	    let haste = args.slice(0).join(" ")
        let type = args.slice(1).join(" ")
        if (!args[0]) { return msg.channel.send(":no_entry: Hastebin Cevirmek Isdediniz Yazı Nedir?; `f?hastebin Merhaba`") }
        hastebin(haste, type).then(r => {
        msg.channel.send(':watch: | Hazırlanıyor...').then(message => {
          message.edit("Buyrun : " + r);
        });
      }).catch(console.error);
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 0
};

exports.help = {
  name: 'hastebin',
  description: 'Yazdınız Kelimeyi Hastebin çevirir.',
  usage: 'hastebin [komut]'
};