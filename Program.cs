﻿using System;
using System.IO;
using System.Threading.Tasks;
using Discord;
using Discord.Commands;
using Discord.WebSocket;
using DenverGamer.Data;
using DenverGamer.Services;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;

namespace DenverGamer
{
    class Program
    {
        public static async Task Main(string[] args) => await BotKeepAsync();

        public static async Task BotKeepAsync() {
            // Discord client configurations
            ServiceCollection discordService = new ServiceCollection();
            DiscordSocketClient discordClient = new DiscordSocketClient(new DiscordSocketConfig() { GatewayIntents = GatewayIntents.AllUnprivileged | GatewayIntents.GuildMembers, LogGatewayIntentWarnings = false, LogLevel = LogSeverity.Info });
            CommandServiceConfig serviceConfig = new CommandServiceConfig() { DefaultRunMode = RunMode.Async, CaseSensitiveCommands = false, IgnoreExtraArgs = true, LogLevel = LogSeverity.Info };
            
            try {
                // Load up from JSON file all bot required data
                BotData botData = JsonConvert.DeserializeObject<BotData>(File.ReadAllText(@"BotData.json"));
                discordService
                    .AddSingleton(discordClient)
                    .AddSingleton(new CommandService(serviceConfig))
                    .AddSingleton(botData)
                    .AddSingleton<BotService>()
                    .AddSingleton<CommHandler>();
            } catch (FileNotFoundException excep) { Console.WriteLine(excep.Message); }

            ServiceProvider serviceProvider = discordService.BuildServiceProvider();
            serviceProvider.GetRequiredService<CommHandler>();
            // Start discord bot connection asynchronous
            await serviceProvider.GetRequiredService<BotService>().StartAsync();
            // Block task untill the program is closed
            await Task.Delay(-1);
        }
    }
}