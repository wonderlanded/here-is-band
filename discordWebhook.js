const Discord = require('discord.js');
const config = require('./config');
const webhook = new Discord.WebhookClient(config.webhook.id, config.webhook.secret)
module.exports = async(content, ignoreConsole) => {
    if(!ignoreConsole) console.log(content)
    webhook.send(content)
} 