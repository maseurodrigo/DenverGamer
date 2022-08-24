const { Client, MessageEmbed } = require('discord.js');
// Create a new client instance
const client = new Client({ intents: 641 });
const { DiscordTogether } = require('./index.js');
client.discordTogether = new DiscordTogether(client);

const noBoostTier = new MessageEmbed().setColor('#EF5350').setDescription("This server doesn't have a high enough boosting level for the requested activity");
const notConnected = new MessageEmbed().setColor('#EF5350').setDescription("I can't invite you to Narnia, please join a voice channel");
var BotData = require('./BotData.json');

client.on('messageCreate', async message => {
    switch (message.content) {
        case BotData.DiscordBotPrefix.concat('poker'):
            if (message.guild.premiumTier == 'NONE') { message.reply({ embeds: [noBoostTier] }); }
            else {
                // If user isnt present in any voice channel
                if (message.member.voice.channel) {
                    client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'poker').then(async invite => {
                        console.log(`${message.member.voice.channel.id}: ${message.content}`);
                        return message.reply(`${invite.code}`).then(msg => { setTimeout(() => msg.delete(), 5000) });
                    });
                } else { message.reply({ embeds: [notConnected] }); };
            } break;
        case BotData.DiscordBotPrefix.concat('chess'):
            if (message.guild.premiumTier == 'NONE') { message.reply({ embeds: [noBoostTier] }); }
            else {
                // If user isnt present in any voice channel
                if (message.member.voice.channel) {
                    client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'chess').then(async invite => {
                        console.log(`${message.member.voice.channel.id}: ${message.content}`);
                        return message.reply(`${invite.code}`).then(msg => { setTimeout(() => msg.delete(), 5000) });
                    });
                } else { message.reply({ embeds: [notConnected] }); };
            } break;
        case BotData.DiscordBotPrefix.concat('betray'):
            // If user isnt present in any voice channel
            if (message.member.voice.channel) {
                client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'betrayal').then(async invite => {
                    console.log(`${message.member.voice.channel.id}: ${message.content}`);
                    return message.reply(`${invite.code}`).then(msg => { setTimeout(() => msg.delete(), 5000) });
                });
            } else { message.reply({ embeds: [notConnected] }); };
            break;
        case BotData.DiscordBotPrefix.concat('doodle'):
            // If user isnt present in any voice channel
            if (message.member.voice.channel) {
                client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'doodlecrew').then(async invite => {
                    console.log(`${message.member.voice.channel.id}: ${message.content}`);
                    return message.reply(`${invite.code}`).then(msg => { setTimeout(() => msg.delete(), 5000) });
                });
            } else { message.reply({ embeds: [notConnected] }); };
            break;
        case BotData.DiscordBotPrefix.concat('spellcast'):
            if (message.guild.premiumTier == 'NONE') { message.reply({ embeds: [noBoostTier] }); }
            else {
                // If user isnt present in any voice channel
                if (message.member.voice.channel) {
                    client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'spellcast').then(async invite => {
                        console.log(`${message.member.voice.channel.id}: ${message.content}`);
                        return message.reply(`${invite.code}`).then(msg => { setTimeout(() => msg.delete(), 5000) });
                    });
                } else { message.reply({ embeds: [notConnected] }); };
            } break;
        case BotData.DiscordBotPrefix.concat('checkers'):
            if (message.guild.premiumTier == 'NONE') { message.reply({ embeds: [noBoostTier] }); }
            else {
                // If user isnt present in any voice channel
                if (message.member.voice.channel) {
                    client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'checkers').then(async invite => {
                        console.log(`${message.member.voice.channel.id}: ${message.content}`);
                        return message.reply(`${invite.code}`).then(msg => { setTimeout(() => msg.delete(), 5000) });
                    });
                } else { message.reply({ embeds: [notConnected] }); };
            } break;
        case BotData.DiscordBotPrefix.concat('lettertile'):
            if (message.guild.premiumTier == 'NONE') { message.reply({ embeds: [noBoostTier] }); }
            else {
                // If user isnt present in any voice channel
                if (message.member.voice.channel) {
                    client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'lettertile').then(async invite => {
                        console.log(`${message.member.voice.channel.id}: ${message.content}`);
                        return message.reply(`${invite.code}`).then(msg => { setTimeout(() => msg.delete(), 5000) });
                    });
                } else { message.reply({ embeds: [notConnected] }); };
            } break;
        case BotData.DiscordBotPrefix.concat('fishing'):
            if (message.guild.premiumTier == 'NONE') { message.reply({ embeds: [noBoostTier] }); }
            else {
                // If user isnt present in any voice channel
                if (message.member.voice.channel) {
                    client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'fishing').then(async invite => {
                        console.log(`${message.member.voice.channel.id}: ${message.content}`);
                        return message.reply(`${invite.code}`).then(msg => { setTimeout(() => msg.delete(), 5000) });
                    });
                } else { message.reply({ embeds: [notConnected] }); };
            } break;
        case BotData.DiscordBotPrefix.concat('wordsnack'):
            if (message.guild.premiumTier == 'NONE') { message.reply({ embeds: [noBoostTier] }); }
            else {
                // If user isnt present in any voice channel
                if (message.member.voice.channel) {
                    client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'wordsnack').then(async invite => {
                        console.log(`${message.member.voice.channel.id}: ${message.content}`);
                        return message.reply(`${invite.code}`).then(msg => { setTimeout(() => msg.delete(), 5000) });
                    });
                } else { message.reply({ embeds: [notConnected] }); };
            } break;
        case BotData.DiscordBotPrefix.concat('awkword'):
            if (message.guild.premiumTier == 'NONE') { message.reply({ embeds: [noBoostTier] }); }
            else {
                // If user isnt present in any voice channel
                if (message.member.voice.channel) {
                    client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'awkword').then(async invite => {
                        console.log(`${message.member.voice.channel.id}: ${message.content}`);
                        return message.reply(`${invite.code}`).then(msg => { setTimeout(() => msg.delete(), 5000) });
                    });
                } else { message.reply({ embeds: [notConnected] }); };
            } break;
        case BotData.DiscordBotPrefix.concat('puttparty'):
            if (message.guild.premiumTier == 'NONE') { message.reply({ embeds: [noBoostTier] }); }
            else {
                // If user isnt present in any voice channel
                if (message.member.voice.channel) {
                    client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'puttparty').then(async invite => {
                        console.log(`${message.member.voice.channel.id}: ${message.content}`);
                        return message.reply(`${invite.code}`).then(msg => { setTimeout(() => msg.delete(), 5000) });
                    });
                } else { message.reply({ embeds: [notConnected] }); };
            } break;
        case BotData.DiscordBotPrefix.concat('sketchheads'):
            if (message.guild.premiumTier == 'NONE') { message.reply({ embeds: [noBoostTier] }); }
            else {
                // If user isnt present in any voice channel
                if (message.member.voice.channel) {
                    client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'sketchheads').then(async invite => {
                        console.log(`${message.member.voice.channel.id}: ${message.content}`);
                        return message.reply(`${invite.code}`).then(msg => { setTimeout(() => msg.delete(), 5000) });
                    });
                } else { message.reply({ embeds: [notConnected] }); };
            } break;
        case BotData.DiscordBotPrefix.concat('ocho'):
            if (message.guild.premiumTier == 'NONE') { message.reply({ embeds: [noBoostTier] }); }
            else {
                // If user isnt present in any voice channel
                if (message.member.voice.channel) {
                    client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'ocho').then(async invite => {
                        console.log(`${message.member.voice.channel.id}: ${message.content}`);
                        return message.reply(`${invite.code}`).then(msg => { setTimeout(() => msg.delete(), 5000) });
                    });
                } else { message.reply({ embeds: [notConnected] }); };
            } break;
        case BotData.DiscordBotPrefix.concat('sketchyartist'):
            if (message.guild.premiumTier == 'NONE') { message.reply({ embeds: [noBoostTier] }); }
            else {
                // If user isnt present in any voice channel
                if (message.member.voice.channel) {
                    client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'sketchyartist').then(async invite => {
                        console.log(`${message.member.voice.channel.id}: ${message.content}`);
                        return message.reply(`${invite.code}`).then(msg => { setTimeout(() => msg.delete(), 5000) });
                    });
                } else { message.reply({ embeds: [notConnected] }); };
            } break;
        case BotData.DiscordBotPrefix.concat('land'):
            if (message.guild.premiumTier == 'NONE') { message.reply({ embeds: [noBoostTier] }); }
            else {
                // If user isnt present in any voice channel
                if (message.member.voice.channel) {
                    client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'land').then(async invite => {
                        console.log(`${message.member.voice.channel.id}: ${message.content}`);
                        return message.reply(`${invite.code}`).then(msg => { setTimeout(() => msg.delete(), 5000) });
                    });
                } else { message.reply({ embeds: [notConnected] }); };
            } break;
        case BotData.DiscordBotPrefix.concat('meme'):
            if (message.guild.premiumTier == 'NONE') { message.reply({ embeds: [noBoostTier] }); }
            else {
                // If user isnt present in any voice channel
                if (message.member.voice.channel) {
                    client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'meme').then(async invite => {
                        console.log(`${message.member.voice.channel.id}: ${message.content}`);
                        return message.reply(`${invite.code}`).then(msg => { setTimeout(() => msg.delete(), 5000) });
                    });
                } else { message.reply({ embeds: [notConnected] }); };
            } break;
        case BotData.DiscordBotPrefix.concat('askaway'):
            if (message.guild.premiumTier == 'NONE') { message.reply({ embeds: [noBoostTier] }); }
            else {
                // If user isnt present in any voice channel
                if (message.member.voice.channel) {
                    client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'askaway').then(async invite => {
                        console.log(`${message.member.voice.channel.id}: ${message.content}`);
                        return message.reply(`${invite.code}`).then(msg => { setTimeout(() => msg.delete(), 5000) });
                    });
                } else { message.reply({ embeds: [notConnected] }); };
            } break;
        case BotData.DiscordBotPrefix.concat('bobble'):
            if (message.guild.premiumTier == 'NONE') { message.reply({ embeds: [noBoostTier] }); }
            else {
                // If user isnt present in any voice channel
                if (message.member.voice.channel) {
                    client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'bobble').then(async invite => {
                        console.log(`${message.member.voice.channel.id}: ${message.content}`);
                        return message.reply(`${invite.code}`).then(msg => { setTimeout(() => msg.delete(), 5000) });
                    });
                } else { message.reply({ embeds: [notConnected] }); };
            } break;
    }
});

// Login with bot token
client.login(BotData.DiscordBotToken);