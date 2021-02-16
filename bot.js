const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login("ODA5ODQ5OTEwMTczMTA2MTk4.YCbFgA.QzYqMG9aW8zp-mHdo4gVe4JRjX0");//BOT_TOKEN is the Client Secret
