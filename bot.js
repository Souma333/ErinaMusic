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

client.login('NzIyMjk2NDk2Nzc0NzA5Mjc5.Xvbg1A.MsHI34UmtepbTNTU2hxVla1i9Ek');
