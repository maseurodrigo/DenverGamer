using System;
using System.Threading.Tasks;
using DenverGamer.Data;
using Discord;
using Discord.Commands;
using Discord.WebSocket;

namespace DenverGamer.Services
{
    public class CommHandler
    {
        // Discord default vars.
        public static DiscordSocketClient discordClient { get; set; }
        public static CommandService discordCommands { get; set; }
        public static IServiceProvider discordService { get; set; }
        public static BotData botData { get; set; }

        public CommHandler(DiscordSocketClient _discordClient, CommandService _discordCommands, IServiceProvider _discordService, BotData _botData) {
            discordClient = _discordClient;
            discordCommands = _discordCommands;
            discordService = _discordService;
            botData = _botData;
            // DiscordSocketClient functions
            discordClient.MessageReceived += client_NewCommandReceived;
            discordClient.Log += botLogEvents;
        }

        private async Task client_NewCommandReceived(SocketMessage message) {
            // Block commands through DMs
            if (message.Channel is SocketDMChannel) { return; }
            // Block messages from verified bots
            if (message.Author.IsBot) { return; }
            else {
                int argPos = 0;
                SocketUserMessage discMessage = message as SocketUserMessage;
                // Detect whether the entered text will be associated with a command
                if (discMessage.HasStringPrefix(botData.BotPrefix, ref argPos)) {
                    await discordCommands.ExecuteAsync(new SocketCommandContext(discordClient, discMessage), argPos, discordService);
                }
            }
        }

        private async Task botLogEvents(LogMessage arg) { await Task.Factory.StartNew(() => { Console.WriteLine(arg.ToString()); }); }
    }
}