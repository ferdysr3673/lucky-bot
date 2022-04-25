const config = require(`${process.cwd()}/structures/botconfig/config.json`);
const {
  Client,
  Message,
  MessageEmbed
} = require('discord.js');

module.exports = {
  name: "growid",
  usage: '',
  description: "GrowID",
  category: "info",
  cooldown: 10,
  userPermissions: "ADMINISTRATOR",
  botPermissions: "",
  ownerOnly: false,
  toggleOff: false,
  
  async execute(client, message, args, ee) {
      let embed = new MessageEmbed()
      .setDescription(`GIVE ME YOUR GROWID FOR COMMAND THE BOT`)
      .setColor(`#303136`)
      message.channel.send({embeds: [embed]})
        }
}