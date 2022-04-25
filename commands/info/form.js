const config = require(`${process.cwd()}/structures/botconfig/config.json`);
const {
  Client,
  Message,
  MessageEmbed
} = require('discord.js');

module.exports = {
  name: "form",
  usage: '',
  description: "Format",
  category: "info",
  cooldown: 10,
  userPermissions: "ADMINISTRATOR",
  botPermissions: "",
  ownerOnly: false,
  toggleOff: false,
  
  async execute(client, message, args, ee) {
      let embed = new MessageEmbed()
      .setDescription(`__Fill this Form__\nOnly Via Trade\nUr World Name :\nMy Growid : Withstood\nScript : (Name of script did you want to buy)\n\nOnly fill the world name and Script\n\nThx`)
      .setColor(`#303136`)
      message.channel.send({embeds: [embed]})
        }
}