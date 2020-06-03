const discord = require('discord.js');
const bot = new discord.Client();
const moment = require('moment');
const token = 'NzE3NDQwMTUwMjkyMTM1OTY3.XtaYsw.gretYImsSlAHCOlvC15pR3VUXwU';
const PREFIX = '!'

var VERSION = '1.0.4'

bot.on('ready', () => {
    console.log('Bot is now online');
    bot.user.setActivity('¦ Stackoverflow Copier ¦')
})

bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'main-chat');
    if (!channel) return;
    channel.send(`Welcome to the server, ${member}`);
});

bot.on('message', msg => {
    let args = msg.content.substring(PREFIX.length).split(" ");
    if (!msg.content.startsWith(PREFIX)) return;

    switch (args[0]) {

        case 'online':
            msg.channel.send('Bot is online');
            break;

        case 'info':
            if (args[1] === 'version') {
                msg.channel.send('version: ' + VERSION);


            } else {
                msg.channel.send("¦ Invalid Command ¦")

            }
            break;

        case 'kick':

            if (msg.member.roles.cache.find(r => r.name === "Admin")) {

                const user = msg.mentions.users.first

                if (user) {
                    const user = msg.mentions.users.first();

                    if (user) {

                        const member = msg.guild.member(user);

                        if (member) {

                            member
                                .kick(`kicked by ${msg.author.username}`)
                                .then(() => {

                                    msg.reply(`¦ Successfully kicked ${user.tag} ¦`);
                                })
                                .catch(err => {

                                    msg.reply('¦ Unable to kick user ¦');

                                    console.error(err);
                                });
                        } else {
                            msg.reply("¦ Invalid User ¦");
                        }
                    } else {
                        msg.reply("¦ Specify User ¦");
                    }
                }
                break;

            } else {
                msg.reply("¦ Acess Denied ¦")
            }
            break;

        case 'ban':

            if (msg.member.roles.cache.find(r => r.name === "Admin")) {

                const user = msg.mentions.users.first

                if (user) {
                    const user = msg.mentions.users.first();

                    if (user) {

                        const member = msg.guild.member(user);

                        if (member) {

                            member
                                .ban(`banned by ${msg.author.username}`)
                                .then(() => {

                                    msg.reply(`¦ Successfully banned ${user.tag} ¦`);
                                })
                                .catch(err => {

                                    msg.reply('¦ Unable to ban user ¦');

                                    console.error(err);
                                });
                        } else {
                            msg.reply("¦ Invalid User ¦");
                        }
                    } else {
                        msg.reply("¦ Specify User ¦");
                    }
                }
                break;

            } else {
                msg.reply("¦ Acess Denied ¦")
            }

            break;

        case 'mute':

            var person = msg.guild.member(msg.mentions.users.first() || msg.guild.member.get(args[1]));
            if (!person) return msg.reply("¦ Couldn't find user:" + person + " ¦")
            let mainrole3 = msg.guild.roles.cache.find(role => role.name === "DJ");
            let mainrole6 = msg.guild.roles.cache.find(role => role.name === "Muted");


            if (!mainrole6) return msg.reply("¦ Couldn't find mute role ¦")

            person.removeRole(mainrole3.id)
            person.addRole(mainrole6.id);

        case 'unmute':

            var person = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[1]));
            if (!person) return message.reply("¦ Couldn't find user:" + person + " ¦")


            if (!mainrole6) return msg.reply("¦ Couldn't find mute role ¦")

            person.addRole(mainrole3.id);

        case 'give_role':

            var person = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[1]));
            if (!person) return message.reply("¦ Couldn't find user:" + person + " ¦")

            const role_exist = person.roles.cache.find(r => r.name === (args[2]));

            if (role_exist) {
                person.addRole((args[2]).id)
            } else {
                msg.channel.send('¦ Invalid Role ¦¦ Acess Denied ¦')
            }





    }
})

bot.login(token)