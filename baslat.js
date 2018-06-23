const Discord = require('discord.js');
const client = new Discord.Client();
const Manager = new Discord.ShardingManager('bot.js');
const Manager1 = new Discord.ShardingManager('./anadosyalar/destek.js');
Manager.spawn(1);
Manager1.spawn(1);

Manager.on('launch', function(shard) {
	console.log(`Ana Bot Aktif Oldu !`);
});

Manager1.on('launch', function(shard) {
	console.log(`Destek Aktif Oldu !`);
});



const express = require('express');
const app = express();

app.listen(1000);