const config = require(`${process.cwd()}/structures/botconfig/config.json`);
const {
  Client,
  Message,
  MessageEmbed
} = require('discord.js');

module.exports = {
  name: "help",
  usage: '',
  description: "help",
  category: "info",
  cooldown: 10,
  userPermissions: "ADMINISTRATOR",
  botPermissions: "",
  ownerOnly: false,
  toggleOff: false,
  
  async execute(client, message, args, ee) {
      let embed = new MessageEmbed()
      .setTitle("__HELP COMMANDS__")
      .setDescription("> **Prefix: ( % )**\n**Product:**\n\`htm, st, vtd, dtv, stf, dtd, pl, plm, pbn, pbm, png, ht, hg, vtv\`\n**Utility**\n\`reps, form, growid, announce, ping, help, price(p), price1(p1)\`")
      .setColor(`#303136`)
      message.channel.send({embeds: [embed]})
        }
}