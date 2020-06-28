const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Saya Siap digunakan');
});

client.on('message', async message => {

  if (message.content === "halo") {
message.channel.send('halo juga :D');

}
});

client.login('');
