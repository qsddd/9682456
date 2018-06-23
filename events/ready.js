const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  client.user.setStatus("dnd");
  client.user.setGame("f?yardım | f?yenilikler | Yeni Nesil", "https://twitch.tv/Fredux");    
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] [Bot]: Bot Hizmete Acıldı !`);
};
