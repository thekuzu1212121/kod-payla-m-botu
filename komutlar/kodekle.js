const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const db = require("quick.db");
exports.run = (client, message, args) => {
if(!message.member.permissions.has("MANAGE_MESSAGES")) 
  return message.channel.send(':x: bu özelliği kullanabilmek için `Kod Paylaşımcı` yetkisine sahip olmalısınız')
  let prefix = ayarlar.prefix;
  let kanal = "" + args[1];
  if (!kanal)
    return message.reply(
      "Lütfen eksik kısımları doldurun.\n**Doğru Kullanım**; **ac!kodekle <``v12,js,js+,altyapi,premium,html``> <kod-adi> <kod-link>**"
    );
  let code = args.slice(2).join(" ");
  if (!code)
    return message.reply(
      "Lütfen eksik kısımları doldurun.\n**Doğru Kullanım**; **ac!kodekle <``v12,js,js+,altyapi,premium,html``> <kod-adi> <kod-link>**"
    );
  const embed2 = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(
      `<a:tik2:731213850539720775> **Yeni bir kod eklendi!** <a:tik2:731213850539720775>\n\n<a:wumpus:731213853857153094> **Yetkili Hakkında;**\n<a:wumpus:731213853857153094> Yetkili Adı • \`${message.author.tag}\`\n<a:wumpus:731213853857153094> Yetkili ID • \`${message.author.id}\`\n\n<a:bune:732744388874076190> **Kod Hakkında;**\n<a:bune:732744388874076190> Kod Adı • \`${kanal}\`\n<a:bune:732744388874076190> Kategori • \`${args[0]}\``
    )
  
    .setThumbnail(message.author.avatarURL);
  client.channels.get("731544979998244904").send(embed2);
  const paylasildi = new Discord.RichEmbed()
  .setTitle("Kod eklendi!")
  .setColor("GREEN")
  .setDescription(`\`${kanal}\` isimli kod \`${args[0]}\` kategorisinde paylaşıldı!`)
  ////////////
  if (args[0] == "js") {
    message.delete();
    if (message.guild.channels.find(a => a.id === "737728738313109665")) {
      message.guild
        .createChannel(`📁・${kanal}`, {
          type: "text",
          parent: message.guild.channels.find(
            a => a.id === "737728738313109665"
          )
        })
        .then(c =>
          c.send(
            new Discord.RichEmbed()
              .setColor("RANDOM")
              .setTitle(`"${kanal}" kodu paylaşıldı!`)
              .setDescription(
`<a:sunss:732745317761417294> **Kod Hakkında;**\n<a:taac:732744367265284106> Yetkili • \`${message.author.tag}\`\n<a:taac:732744367265284106> Yetkili ID • \`${message.author.id}\`\n<a:taac:732744367265284106> Kod Linki • [Tıkla](${code})`
              )
              .setFooter(`© 2020 Astarius Code`)
          )
        );
      message.channel.send(paylasildi)
        .then(n => n.delete(5000));
    } else {
      return message.reply(`Öyle bir kategori yok!`);
    }
  }
  //////////////JS SON
////////////
  if (args[0] == "v12") {
    message.delete();
    if (message.guild.channels.find(a => a.id === "738850123412668487")){
      message.guild
        .createChannel(`💥・${kanal}`, {
          type: "text",
          parent: message.guild.channels.find(
            a => a.id === "738850123412668487"
          )
        })
        .then(c =>
          c.send(
            new Discord.RichEmbed()
              .setColor("RANDOM")
              .setTitle(`"${kanal}" kodu paylaşıldı!`)
              .setDescription(
`<a:sunss:732745317761417294> **Kod Hakkında;**\n<a:taac:732744367265284106> Yetkili • \`${message.author.tag}\`\n<a:taac:732744367265284106> Yetkili ID • \`${message.author.id}\`\n<a:taac:732744367265284106> Kod Linki • [Tıkla](${code})`
              )
              .setFooter(`© 2020 Astarius Code`)
          )
        );
      message.channel.send(paylasildi)
        .then(n => n.delete(5000));
    } else {
      return message.reply(`Öyle bir kategori yok!`);
    }
  }
/// v12 SON
  //////////////JS+
  if (args[0] == "js+") {
    message.delete();
    if (message.guild.channels.find(a => a.id === "731319538490015845")) {
      message.guild
        .createChannel(`🔮・${kanal}`, {
          type: "text",
          parent: message.guild.channels.find(
            a => a.id === "731319538490015845"
          )
        })
        .then(c =>
          c.send(
            new Discord.RichEmbed()
              .setColor("RANDOM")
              .setTitle(`"${kanal}" kodu paylaşıldı!`)
              .setDescription(
`<a:sunss:732745317761417294> **Kod Hakkında;**\n<a:taac:732744367265284106> Yetkili • \`${message.author.tag}\`\n<a:taac:732744367265284106> Yetkili ID • \`${message.author.id}\`\n<a:taac:732744367265284106> Kod Linki • [Tıkla](${code})`
              )
              .setFooter(`© 2020 Astarius Code`)
          )
        );
      message.channel.send(paylasildi)
        .then(n => n.delete(5000));
    } else {
      return message.reply(`Öyle bir kategori yok!`);
    }
  }
  //////////////JS+ SON

  //////////////ALTYAPI
  if (args[0] == "altyapi") {
    message.delete();
    if (message.guild.channels.find(a => a.id === "731216151563993239")) {
      message.guild
        .createChannel(`⚜・${kanal}`, {
          type: "text",
          parent: message.guild.channels.find(
            a => a.id === "731216151563993239"
          )
        })
        .then(c =>
          c.send(
            new Discord.RichEmbed()
              .setColor("RANDOM")
              .setTitle(`"${kanal}" altyapısı paylaşıldı!`)
              .setDescription(
`<a:sunss:732745317761417294> **Kod Hakkında;**\n<a:taac:732744367265284106> Yetkili • \`${message.author.tag}\`\n<a:taac:732744367265284106> Yetkili ID • \`${message.author.id}\`\n<a:taac:732744367265284106> Kod Linki • [Tıkla](${code})`
              )
              .setFooter(`© 2020 Astarius Code`)
          )
        );
      message.channel.send(paylasildi)
        .then(n => n.delete(5000));
    } else {
      return message.reply(`Öyle bir kategori yok!`);
    }
  }
  //////////////ALTYAPI SON

  //////////HTML
  if (args[0] == "html") {
    message.delete();
    if (message.guild.channels.find(a => a.id === "731215549127983164")) {
      message.guild
        .createChannel(`🌐・${kanal}`, {
          type: "text",
          parent: message.guild.channels.find(
            a => a.id === "731215549127983164"
          )
        })
        .then(c =>
          c.send(
            new Discord.RichEmbed()
              .setColor("RANDOM")
              .setTitle(`"${kanal}" kodu paylaşıldı!`)
              .setDescription(
`<a:sunss:732745317761417294> **Kod Hakkında;**\n<a:taac:732744367265284106> Yetkili • \`${message.author.tag}\`\n<a:taac:732744367265284106> Yetkili ID • \`${message.author.id}\`\n<a:taac:732744367265284106> Kod Linki • [Tıkla](${code})`
              )
              .setFooter(`© 2020 Astarius Code`)
          )
        );
      message.channel.send(paylasildi)
        .then(n => n.delete(5000));
    } else {
      return message.reply(`Öyle bir kategori yok!`);
    }
  }
  ///////////HTML SON

  //////////////PREMIUM
  if (args[0] == "premium") {
    message.delete();
    if (message.guild.channels.find(a => a.id === "731215301068193862")) {
      message.guild
        .createChannel(`🎀・${kanal}`, {
          type: "text",
          parent: message.guild.channels.find(
            a => a.id === "731215301068193862"
          )
        })
        .then(c =>
          c.send(
            new Discord.RichEmbed()
              .setColor("RANDOM")
              .setTitle(`"${kanal}" kodu paylaşıldı!`)
              .setDescription(
`<a:sunss:732745317761417294> **Kod Hakkında;**\n<a:taac:732744367265284106> Yetkili • \`${message.author.tag}\`\n<a:taac:732744367265284106> Yetkili ID • \`${message.author.id}\`\n<a:taac:732744367265284106> Kod Linki • [Tıkla](${code})`
              )
              .setFooter(`© 2020 Astarius Code`)
          )
        );
      message.channel.send(paylasildi)
        .then(n => n.delete(5000));
    } else {
      return message.reply(`Öyle bir kategori yok!`);
    }
  }
  //////////////PREMIUM SON
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kod-ekle"],
  permLevel: 0
};

exports.help = {
  name: "kodekle"
};