const config = require(`${process.cwd()}/structures/botconfig/config.json`);
const {
  Client,
  Message,
  MessageEmbed
} = require('discord.js');

module.exports = {
  name: "price1",
  aliases: ["p1"],
  usage: '',
  description: "Product List & Price List",
  category: "info",
  cooldown: 10,
  userPermissions: "",
  botPermissions: "",
  ownerOnly: false,
  toggleOff: false,
  
  async execute(client, message, args, ee) {
      let embed = new MessageEmbed()
      .setTitle("__PRICE LIST SCRIPT__")
      .setDescription(`-SCRIPT AUTO HARVEST MOVED (NO ERCON AND SUPPORT PROVIDER) PRICE 650 WLS SUPPORT 3 BOT\n-SCRIPT AUTO HARVEST MOVED MULTIBOT AND MULTIWORLD SUPPORT 3 BOT 1300WLS\n-SCRIPT VEND TO VEND NO ERCON PRICE 300 WLS\n-SCRIPT MOVE DROP TO DROP NO ERCON 500 WLS SUPPORT 3 BOT\n-SCRIPT EMPTY VEND TO DROP NO ERCON 450 WLS SUPPORT 3 BOT\n-SCRIPT SKIP TUTOR AUTO EQUIP PICKAXE 800 WLS\n-SCRIPT DROP TO VEND NO ERCON 400
SUPPORT 3 BOT\n-SCRIPT AUTO HT WHEAT AND GRIND THE WHEAT 400\n-SCRIPT PLANT FAST NO MISS SUPPORT 3 BOT 2 MODE CAN TAKE SEED OTHER/SAME WORLD
500WLS\n-SCRIPT SEED TO FLOUR NO MISS MAKE ALL UNTIL NO SEED MBOT PRICE 700WLS\n-SCRIPT AUTO PNB WITHOUT GAUT NO ERCON 3 BOTS 500WLS\n-SCRIPT PABRIK LGRID FAST BREAK PLANT AND HT 10-13DLs`)
      .setColor(`#303136`)
      message.channel.send({embeds: [embed]})
        }
}