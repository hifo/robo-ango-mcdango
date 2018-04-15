const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Ready!');
    var channel = client.channels.get('430752912403071009');
    channel.send('Hello, Sirs!');
});

client.on('message', message => {
	if (message.content === `${prefix}ping`) {
		message.channel.send('Pong.');
	}
});

client.login(token);

