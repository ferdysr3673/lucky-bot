const config = require(`${process.cwd()}/structures/botconfig/config.json`);
const {
  Client,
  Message,
  MessageEmbed
} = require('discord.js');

module.exports = {
  name: "price",
  aliases: ['p'],
  usage: '',
  description: "Price List",
  category: "info",
  cooldown: 10,
  userPermissions: "",
  botPermissions: "",
  ownerOnly: false,
  toggleOff: false,
  
  async execute(client, message, args, ee) {
      let embed = new MessageEmbed()
      .setTitle("__PRICE LIST__")           
      .setDescription(`- AUTO HARVEST MOVED 750WLs\n- AUTO HARVEST MOVED MULTIWORLD 13DLs\n- VEND TO VEND 300WLs\n- MOVE DROP TO DROP 500WLs\n- MOVE VEND TO DROP 450WLs\n- SKIP TUTOR AUTO EQUIP PICKAXE 8DLs\n- MOVE DROP TO VEND 400WLs\n- AUTO HARVEST AND GRIND 400WLs\n- PLANT LITE 500WLs\n- PLANT LITE MULTIWORLD 10DLs\n- SEED TO FLOUR 700WLs\n- PNB NO NO GAUT 5DLs\n- PABRIK FARM MULTIWORLD 20DLs\n- PABRIK FARM NO MULTIWORLD 10DLs`)
      .setColor(`#303136`)
      message.channel.send({embeds: [embed]})
        }
}