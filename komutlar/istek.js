const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let istek = args.slice(0).join(" ");
  if (istek.length < 1)
    return message.channel.send("Doğru Kullanım : ac!istek sayaç kodu");
  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription("İsteğiniz başarıyla iletildi!");
  message.channel.send(embed);
  const embed2 = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`**YENI ISTEK BILGISI**`)
    .addField(
      `:envelope: **Gönderen Kişinin Bilgileri**`,
      `:white_small_square:Kullanıcı ID: ${message.author.id}\n:white_small_square:Kullanıcı Adı: ${message.author.username}\n:white_small_square:Kullanıcı Tagı: ${message.author.discriminator}`
    )
    .addField(":pencil: **İstenilen Kod**", istek)
    .setThumbnail(message.author.avatarURL);
  client.channels.get("731208911050375284").send(embed2); // Kanal ID
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "istek",
  description: "...",
  usage: "istek <kod>"
};
