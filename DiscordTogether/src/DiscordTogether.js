const fetch = require('node-fetch');
const { Client } = require('discord.js');

const defaultApplications = {
    poker: '755827207812677713',
    betrayal: '773336526917861400',
    chess: '832012774040141894',
    doodlecrew: '878067389634314250',
    spellcast: '852509694341283871',
    checkers: '832013003968348200',
    lettertile: '879863686565621790',
    fishing: '814288819477020702',
    wordsnack: '879863976006127627',
    awkword: '879863881349087252',
    puttparty: '763133495793942528',
    sketchheads: '902271654783242291',
    ocho: '832025144389533716',
    sketchyartist: '879864070101172255',
    land: '903769130790969345',
    meme: '950505761862189096',
    askaway: '976052223358406656',
    bobble: '947957217959759964'
};

/**
 * Class symbolizing a YoutubeTogether
 * @template {Object.<string, string>} T
 */
class DiscordTogether {
  /**
   * Create a new YoutubeTogether
   * @param {Client} client Discord.Client
   * @param {T} applications
   * @example
   * const Discord = require('discord.js');
   * const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] });
   * const { DiscordTogether } = require('discord-together');
   *
   * client.discordTogether = new DiscordTogether(client);
   *
   * client.on('message', async message => {
   *      if (message.content === 'start') {
   *          client.discordTogether.createTogetherCode(message.member.voice.channelID, 'youtube').then(async invite => {
   *              return message.channel.send(`${invite.code}`);
   *           });
   *      };
   * });
   *
   * client.login('your token');
   */
  constructor(client, applications = defaultApplications) {
    if (!client) throw new SyntaxError('Invalid Discord.Client !');

    /**
     * Discord.Client
     */
    this.client = client;

    /**
     * Discord Together applications
     */
    this.applications = { ...defaultApplications, ...applications };
  }

  /**
   * Create a Youtube Together invite code (note: send the invite using markdown link)
   * @param {string} voiceChannelId
   * @param {keyof (defaultApplications & T)} option
   * @example
   * client.on('message', async message => {
   *      if (message.content === 'start') {
   *          client.discordTogether.createTogetherCode(message.member.voice.channelID, 'youtube').then(async invite => {
   *              return message.channel.send(`${invite.code}`); // Click the blue link
   *           });
   *      };
   * });
   * @returns {Promise<{ code: string; }>}
   */
  async createTogetherCode(voiceChannelId, option) {
    /**
     * @param {string} code The invite link (only use the blue link)
     */
    let returnData = {
      code: 'none',
    };
    if (option && this.applications[option.toLowerCase()]) {
      let applicationID = this.applications[option.toLowerCase()];
      try {
        await fetch(`https://discord.com/api/v8/channels/${voiceChannelId}/invites`, {
          method: 'POST',
          body: JSON.stringify({
            max_age: 86400,
            max_uses: 0,
            target_application_id: applicationID,
            target_type: 2,
            temporary: false,
            validate: null,
          }),
          headers: {
            Authorization: `Bot ${this.client.token}`,
            'Content-Type': 'application/json',
          },
        })
          .then((res) => res.json())
          .then((invite) => {
            if (invite.error || !invite.code) throw new Error('An error occured while retrieving data !');
            if (Number(invite.code) === 50013) console.warn('Your bot lacks permissions to perform that action');
            returnData.code = `https://discord.com/invite/${invite.code}`;
          });
      } catch (err) {
        throw new Error('An error occured while starting Youtube together !');
      }
      return returnData;
    } else {
      throw new SyntaxError('Invalid option !');
    }
  }
}

module.exports = DiscordTogether;
