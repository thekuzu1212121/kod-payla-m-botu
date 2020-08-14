const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const weather = require('weather-js')
const fs = require('fs');
const db = require('quick.db');
const http = require('http');
const express = require('express');
require('./util/eventLoader.js')(client);
const path = require('path');
const request = require('request');
const snekfetch = require('snekfetch');
const queue = new Map();
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');


const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + "Bot Hostlandı! | Astarius #Code #BotList");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 2800000);

var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

//--------------------------------- KOMUTLAR---------------------------------\\
const events = {
    MESSAGE_REACTION_ADD: 'messageReactionAdd',
    MESSAGE_REACTION_REMOVE: 'messageReactionRemove',
};
client.on('raw', async event => {
    if (!events.hasOwnProperty(event.t)) return;
    const { d: data } = event;
    const anto = client.users.get(data.user_id);
    const channel = client.channels.get(data.channel_id) || await anto.createDM();
    if (channel.messages.has(data.message_id)) return;
    const message = await channel.fetchMessage(data.message_id);
    const emojiKey = (data.emoji.id) ? `${data.emoji.name}:${data.emoji.id}` : data.emoji.name;
    const reaction = message.reactions.get(emojiKey);
    client.emit(events[event.t], reaction, anto);
});
client.on('messageReactionAdd', (reaction, user) => {
  if (reaction.message.id == "736719900529393685") {//Geçerli olması istediğiniz mesajın ID'sini yazabilirsiniz.
    if (reaction.emoji.name == "javascript") {//Dilediğini emojiyi koyabilirsiniz.
      reaction.message.guild.members.get(user.id).addRole(reaction.message.guild.roles.find('name', '📁・JavaScript'))//Dilediğiniz rolün adını yazabilirsiniz.
    }
 
    if (reaction.emoji.name == "altyapi") {//Dilediğiniz emojiyi koyabilirsiniz.
      reaction.message.guild.members.get(user.id).addRole(reaction.message.guild.roles.find('name', '⚜・Altyapı'))//Dilediğiniz rolün adını yazabilirsiniz.
    }
    if (reaction.emoji.name == "html") {//Dilediğiniz emojiyi koyabilirsiniz.
        reaction.message.guild.members.get(user.id).addRole(reaction.message.guild.roles.find('name', '🌐・HTML'))//Dilediğiniz rolün adını yazabilirsiniz.
      }
    if (reaction.emoji.name == "8256_everyone") {//Dilediğiniz emojiyi koyabilirsiniz.
        reaction.message.guild.members.get(user.id).addRole(reaction.message.guild.roles.find('name', '💥・Partner Görme'))//Dilediğiniz rolün adını yazabilirsiniz.
      }
  }
});
client.on('messageReactionAdd', (reaction, user) => {
  if (reaction.message.id == "739886058640113774") {//Geçerli olması istediğiniz mesajın ID'sini yazabilirsiniz.
    if (reaction.emoji.name == "8256_everyone") {//Dilediğini emojiyi koyabilirsiniz.
      reaction.message.guild.members.get(user.id).addRole(reaction.message.guild.roles.find('name', '💥・Partner Görme'))//Dilediğiniz rolün adını yazabilirsiniz.
}
    }
  });
      /////// OTOROL
client.on("guildMemberAdd", async member => {
  
 let kanal = db.fetch(`astariuskanal_${member.guild.id}`)   
 let rol = db.fetch(`astariusrol_${member.guild.id}`)
let mesaj = db.fetch(`astariusmesaj_${member.guild.id}`)
  
if(!kanal) return
member.addRole(rol)
  if(!mesaj) {
  client.channels.get(kanal).send(':loudspeaker: :inbox_tray: Otomatik Rol Verildi Seninle Beraber **`'+member.guild.memberCount+'`** Kişiyiz! <:tik2:731213850539720775> Hoşgeldin! **`'+member.user.username+'`**')
} else {
  
      var mesajs = mesaj.replace("-uye-", `${member.author.tag}`).replace("-uyetag-", `${member.author.username}`) .replace("-server-", `${member.guild.name}`).replace("-rol-", member.guild.roles.get(db.fetch(`astariusrol_${member.guild.id}`)).name).replace("-onlineuyesayısı-", member.guild.members.filter(s => s.presenceStatus === "online").size).replace("-botsayisi-", member.guild.members.filter(s => s.bot).size) .replace('-kanalsayisi-' ,member.guild.channels.size ).replace("-uyesayisi-", member.guild.memberCount).replace("-bolge-", member.guild.region)
  
  client.channels.get(kanal).send(mesajs)
}

});
//// OTOROL SON

// RANDOM PP
 

/// GUVENLIK
client.on("guildMemberAdd", async member => {
  let girenKisi = client.users.get(member.id);
  let girisKanal = client.channels.get(db.fetch(`astaG${member.guild.id}`));
  let Güvenli = `Güvenli!`;
  let Şüpheli = `Güvenli Değil!`;

  const ktarih = new Date().getTime() - girenKisi.createdAt.getTime();
  var kontrol;
  if (ktarih > 2629800000) kontrol = Güvenli;
  if (ktarih < 2629800001) kontrol = Şüpheli;
  let kanal = await db.fetch(`astaG${member.guild.id}`);
  if (!kanal) return;
  const giris = new Discord.RichEmbed()
    .setColor("GREEN")
  .setTitle("Astarius Güvenlik Sistemi")
.setDescription(`:bust_in_silhouette: **Kullanıcı** • \`${member.user.tag}\`\n:rosette: **Kullanıcı ID** • \`${member.user.id}\`\n:shield: **Güvenlik Durumu** • \`${kontrol}\``)
  client.channels.get(kanal).send(giris);
});

client.on('guildMemberAdd', member => {
var astarius = client.guilds.cache.get("731208910568030278") //sunucu id
astarius.setName(`Astarius Code #${astarius.memberCount} Kişi`); 
})
client.on('guildMemberRemove', member => {
var astarius = client.guilds.cache.get("731208910568030278") //sunucu id
astarius.setName(`Astarius Code #${astarius.memberCount} Kişi`); 
})
client.on("message", message => {
  if (message.content === `!js`) {
    const astariuscevap = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`${message.author}, <#731208911050375283> kanalından alabilirsin!`)
      .setFooter(`Astarius Code`);
    return message.channel.send(astariuscevap);

  }

});
client.on("message", message => {
  if (message.content === `ac!js`) {
    const astariuscevap = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`${message.author}, <#731208911050375283> kanalından alabilirsin!`)
      .setFooter(`Astarius Code`);
    return message.channel.send(astariuscevap);
  }

});