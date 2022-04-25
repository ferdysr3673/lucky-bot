const config = require(`${process.cwd()}/structures/botconfig/config.json`);
const {
  Client,
  Message,
  MessageEmbed
} = require('discord.js');

module.exports = {
  name: "dtd",
  usage: '',
  description: "Product List & Price List",
  category: "utility",
  cooldown: 10,
  userPermissions: "ADMINISTRATOR",
  botPermissions: "",
  ownerOnly: false,
  toggleOff: false,
  
  async execute(client, message, args, ee) {
      let embed = new MessageEmbed()
      .setDescription(`MOVE DROP TO DROP 500WLs`)
      .setColor(`#303136`)
      message.channel.send({embeds: [embed]})
        }
}