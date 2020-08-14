const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
const prefix = ayarlar.prefix;
exports.run = async (bot, message, args, tools) => {
  const embed = new Discord.RichEmbed()
.setDescription(`${prefix}kodekle \`•\` Sunucuya kod ekler.\n${prefix}istek \`•\` İstek bildirisini iletir.`)
  .setColor("BLACK")
    .setFooter(bot.user.username, bot.user.avatarURL);
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y"],
  permLevel: 0
};

exports.help = {
  name: "yardım"
};
//Astarius Code