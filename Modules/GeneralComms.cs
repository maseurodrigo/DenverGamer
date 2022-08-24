using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Discord;
using Discord.Commands;

namespace DenverGamer.Modules
{
    [Summary("General Discord Commands")]
    public class GeneralComms : ModuleBase<SocketCommandContext>
    {
        // Getting all services through constructor param with AddSingleton()
        private readonly CommandService commandService;
        private GeneralComms(CommandService _commandService) => commandService = _commandService;

        [Command("help")]
        [RequireBotPermission(ChannelPermission.SendMessages)]
        public async Task getHelp() {
            EmbedBuilder embedBuilder = new EmbedBuilder();
            // List of commands to exclude from help list
            Dictionary<String, bool> commsToExclude = new Dictionary<String, bool>() { { "conn", false }, { "help", false } };
            // List of all available commands
            foreach (CommandInfo command in commandService.Commands.OrderBy(comm => comm.Name).ToList()) {
                if (!commsToExclude.ContainsKey(command.Name)) {
                    // Get the command Summary attribute information
                    String embedFieldText = command.Summary ?? "No description available";
                    embedBuilder.AddField($"`{ command.Name.ToLower() }`", embedFieldText);
                }
            }
            // Reply with the embed
            await ReplyAsync(null, false, embedBuilder.Build());
        }

        [Command("conn")]
        [Alias("connection", "status")]
        [RequireBotPermission(ChannelPermission.SendMessages)]
        [Summary("Get the current status of the bot connection")]
        public async Task getConnection() {
            // Retrieve bot connection status
            EmbedBuilder embedBuilder = new EmbedBuilder();
            ConnectionState currentConn = Context.Client.ConnectionState;
            embedBuilder.AddField("Login", Context.Client.LoginState, true);
            embedBuilder.AddField("Connection", currentConn, true);
            if (currentConn.Equals(ConnectionState.Connected)) embedBuilder.AddField("Latency", $"{ Context.Client.Latency } ms", true);
            // Reply with the embed
            await ReplyAsync(null, false, embedBuilder.Build());
        }

        [Command("poker")]
        [Summary("Play a **Poker** game with other users on a voice channel")]
        public async Task discTogether_Poker() { await Task.CompletedTask; }

        [Command("chess")]
        [Summary("Play a **Chess** game with other users on a voice channel")]
        public async Task discTogether_Chess() { await Task.CompletedTask; }

        [Command("betray")]
        [Summary("Play a **Betrayal** game with other users on a voice channel")]
        public async Task discTogether_Betrayal() { await Task.CompletedTask; }

        [Command("doodle")]
        [Summary("Play a **Doodle Crew** game with other users on a voice channel")]
        public async Task discTogether_DoodleCrew() { await Task.CompletedTask; }

        [Command("spellcast")]
        [Summary("Play a **Spell Cast** game with other users on a voice channel")]
        public async Task discTogether_SpellCast() { await Task.CompletedTask; }

        [Command("checkers")]
        [Summary("Play a **Checkers** game with other users on a voice channel")]
        public async Task discTogether_Checkers() { await Task.CompletedTask; }

        [Command("lettertile")]
        [Summary("Play a **LetterTile** game with other users on a voice channel")]
        public async Task discTogether_LetterTile() { await Task.CompletedTask; }

        [Command("fishing")]
        [Summary("Play a **Fishing** game with other users on a voice channel")]
        public async Task discTogether_Fishing() { await Task.CompletedTask; }

        [Command("wordsnack")]
        [Summary("Play a **WordSnack** game with other users on a voice channel")]
        public async Task discTogether_WordSnack() { await Task.CompletedTask; }

        [Command("awkword")]
        [Summary("Play a **Awkword** game with other users on a voice channel")]
        public async Task discTogether_Awkword() { await Task.CompletedTask; }

        [Command("puttparty")]
        [Summary("Play a **PuttParty** game with other users on a voice channel")]
        public async Task discTogether_PuttParty() { await Task.CompletedTask; }

        [Command("sketchheads")]
        [Summary("Play a **SketchHeads** game with other users on a voice channel")]
        public async Task discTogether_SketchHeads() { await Task.CompletedTask; }

        [Command("ocho")]
        [Summary("Play a **Ocho** game with other users on a voice channel")]
        public async Task discTogether_Ocho() { await Task.CompletedTask; }

        [Command("sketchyartist")]
        [Summary("Play a **SketchyArtist** game with other users on a voice channel")]
        public async Task discTogether_SketchyArtist() { await Task.CompletedTask; }

        [Command("land")]
        [Summary("Play a **Land** game with other users on a voice channel")]
        public async Task discTogether_Land() { await Task.CompletedTask; }

        [Command("meme")]
        [Summary("Play a **Meme** game with other users on a voice channel")]
        public async Task discTogether_Meme() { await Task.CompletedTask; }

        [Command("askaway")]
        [Summary("Play a **AskAway** game with other users on a voice channel")]
        public async Task discTogether_AskAway() { await Task.CompletedTask; }

        [Command("bobble")]
        [Summary("Play a **Bobble** game with other users on a voice channel")]
        public async Task discTogether_Bobble() { await Task.CompletedTask; }
    }
}