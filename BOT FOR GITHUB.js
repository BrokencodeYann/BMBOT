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
    if (message.content === "azelpy") {
        message.reply("Mec sympa, on le voit rarement mais quand il est là, il met l'ambiance.");
    }
    if (message.content === "etau") {
        message.reply("Mon petit QC :heart: ");
    }
    if (message.content === "yann") {
        message.reply("Lui, c'est le meilleur de tous ! l'empereur du monde");
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
            https://www.cudominer.com/?refby=rdTPYdbxga
            if (message.content === prefix + "minage") {
                var creator_embed = new Discord.RichEmbed()
                    .setTitle(`Comment miner de la crypto monnaie`)
                    .setDescription("testez le programme en beta")
                    .addField("https://cudominer.com?a=fkJgTA3FJ6","Cudominer beta")
                    .addField("Xmrig","Monero mining")
                    .addField("Robot par Yann","BITMINING")
                    message.channel.send({embed: creator_embed});
            }

           //  case "kick":
               
             //  if(!message.channel.permissionsFor(message.member).hasPermission("KICK_MEMBERS")) {
               //    message.reply("Vous n'avez pas les permissions pour Kick !")
               //}else {
                 //  var memberkick = message.mentions.members.first();
                   //console.log(memberkick)
                   //console.log(message.guild.member(memberkick).kickable)
                   //if(!memberkick) {
                    //   message.reply("L'utilisatezr n'est pas présent.")
                   //}else{
                     //  if(!message.guild.member(memberkick).kickable){
                       //    message.reply("Utilisateur impossible à kick ...")
                       //}else{
                        //message.guild.member(memberkick).kick().then((member) => {
                        //message.channel.send(`${member.displayName} à été kick : Kick envoyé`);
                       //}).catch(() => {
                         //  message.channel.send("Kick Refusé !")
                   //    })
                  // }
             //  }
           // }
            //   break;
 
           // }

});