
Skip to content
Pull requests
Issues
Marketplace
Explore
@BrokencodeYann

0
0

    0 --BmBot err

BrokencodeYann/BMBOT
Code
Issues 0
Pull requests 0
Projects 0
Wiki
Security
Insights
Settings
BMBOT/BOT FOR GITHUB.js
@BrokencodeYann BrokencodeYann Yes Life Gang 7e81f2b on 2 Nov 2018
We found potential security vulnerabilities in your dependencies.

Only the owner of this repository can see this message.
166 lines (150 sloc) 7.37 KB
const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
 
const adapter = new FileSync('db.json')
const db = low(adapter)
 
db.defaults({ posts: [], user: {}, xp: []}).write();

var bot = new Discord.Client();
var prefix = ("§")
var randnum = 0;

bot.on('ready', () => {
    console.log("Bot ready !");
    bot.user.setPresence({game: { name: '§help', type: 0}});
});

bot.login(`YOUR TOKEN HERE`);
bot.on('message', message => {

var msgauthor = message.author.id;

if(message.author.bot)return;

if(!db.get("xp").find({user: msgauthor}).value()){
    db.get("xp").push({user: msgauthor, xp: 1}).write();

}else{
var userxpdb = db.get("xp").filter({user: msgauthor}).find('xp').value();
console.log(userxpdb);
var userxp = Object.values(userxpdb)
console.log(userxp);
console.log(`Nombre d'xp :${userxp[1]}`)

db.get("xp").find({user: msgauthor}).assign({user: msgauthor, xp: userxp[1] +=1}).write();
}

    if (message.content === "Bvn") {
        message.reply("Bienvenue");
    }
    if (message.content === "Bienvenue") {
        message.reply("Bienvenue");
    }
    if (message.content === "Bitcoin") {
        message.reply("Le bitcoin est la crypto-monnaie la plus connue.");
    }
    if (message.content === "bitmining") {
        message.reply("Bitmining est une communauté de mineurs débutant");
    }
    if (message.content === "cudo") {
        message.reply("https://cudominer.com?a=fkJgTA3FJ6");
    }

            if (message.content === prefix + "xp") {
                var xp = db.get("xp").filter({user: msgauthor}).find('xp').value()
                var xpfinal = Object.values(xp);
                var xp_embed = new Discord.RichEmbed()
                    .setTitle(`xp de : ${message.author.username}`)
                    .setDescription("Voici vos xp :")
                    .addField("XP (stocké dans une base de donnée) :",`${xpfinal[1]} xp`)
                message.channel.send({embed: xp_embed});
            }
            if (message.content === prefix + "creator") {
                var creator_embed = new Discord.RichEmbed()
                    .setTitle(`Creator page`)
                    .setDescription("Le createur de ce bot est Yann Berlemont")
                    .addField("BITMINING","Robot pour Bitmining")
                    .addField("Robot par Yann","BITMINING")
                    message.channel.send({embed: creator_embed});
            }
            if (message.content === prefix + "partenaires") {
                var creator_embed = new Discord.RichEmbed()
                    .setTitle(`Nos partenaires`)
                    .setDescription("Nous avons diférents partenaires")
                    .addField("La ferme du mineur","JU#1821")
                    .addField("Robot par Yann","BITMINING")
                    message.channel.send({embed: creator_embed});
            }
            if (message.content === prefix + "trading") {
                var creator_embed = new Discord.RichEmbed()
                    .setTitle(`trading website`)
                    .setDescription("https://www.tradingview.com/")
                    .addField("BITMINING","Robot pour Bitmining")
                    .addField("Robot par Yann","BITMINING")
                    message.channel.send({embed: creator_embed});
            }
            if (message.content === prefix + "site") {
                var creator_embed = new Discord.RichEmbed()
                    .setTitle(`Pour le trading `)
                    .setDescription("https://www.tradingview.com/")
                    .addField("BITMINING","Site en développement")
                    .addField("Pour calculer votre rentabilité","https://whattomine.com/coins")
                    .addField("Pour investir"," https://changelly.com/")
                    .addField("Pour commencer à miner", "https://cudominer.com?a=fkJgTA3FJ6")
                    .addField("Robot par Yann","BITMINING")
                    message.channel.send({embed: creator_embed});
            }
            if (message.content === prefix + "inv") {
                var creator_embed = new Discord.RichEmbed()
                    .setTitle(`Soutenir le serveur`)
                    .setDescription("Soutiens le serveur grâce au lien ci-dessous")
                    .addField("https://discord.gg/SAVjzAk","Merci :p")
                    .addField("Robot par Yann","BITMINING")
                    message.channel.send({embed: creator_embed});
            }
            if (message.content === prefix + "help") {
                var creator_embed = new Discord.RichEmbed()
                    .setTitle(`help`)
                    .setDescription("help page")
                    .addField("Sites","§site")
                    .addField("inviter des amis","§inv")
                    .addField("Vos Xp sur le serveur","§xp")
                    .addField("Différents logiciels de minage","§minage")
                    .addField("partenaires","§partenaires")
                    .addField("Voir le créateur","§creator")
                    .addField("Robot par Yann","BITMINING")
                    message.channel.send({embed: creator_embed});
            }
            if (message.content === prefix + "minage") {
                var creator_embed = new Discord.RichEmbed()
                    .setTitle(`Comment miner de la crypto monnaie`)
                    .setDescription("testez le programme en beta")
                    .addField("https://cudominer.com?a=fkJgTA3FJ6","Cudominer beta")
                    .addField("Xmrig","Monero mining")
                    .addField("Robot par Yann","BITMINING")
                    message.channel.send({embed: creator_embed});
            }

});

"devDependencies": {
  "lodash": ">=4.17.19"
}

    © 2019 GitHub, Inc.
    Terms
    Privacy
    Security
    Status
    Help

    Contact GitHub
    Pricing
    API
    Training
    Blog
    About

