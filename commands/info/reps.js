const config = require(`${process.cwd()}/structures/botconfig/config.json`);
const {
  Client,
  Message,
  MessageEmbed
} = require('discord.js');

module.exports = {
  name: "reps",
  usage: '',
  description: "reputation",
  category: "info",
  cooldown: 10,
  userPermissions: "ADMINISTRATOR",
  botPermissions: "",
  ownerOnly: false,
  toggleOff: false,
  
  async execute(client, message, args, ee) {
      let embed = new MessageEmbed()
      .setDescription(`**Please Reps and close ticket you have 24 hours to close and download your script if no close admin will close __No Reps = No Role__**`)
      .setColor(`#303136`)
      message.channel.send({embeds: [embed]})
        }
}