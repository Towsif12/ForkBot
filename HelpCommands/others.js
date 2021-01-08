const { MessageEmbed } = require("discord.js");
const fs = require('fs');
const { PREFIX, COLOR } = require('../config.json')
module.exports = {
  name: "others",
  aliases: ["others"],
  description: "Shows your or others avatar...",
  execute(message) {
    let commands = message.client.commands.array();
    let otherEmbed = new MessageEmbed()
      .setTitle(`🧵 Others`)
      .setDescription('Other Commands')
      .setColor(COLOR)
      .addField('🎃 Status', `\`${PREFIX}serverinfo\`, \`${PREFIX}userinfo\`, \`${PREFIX}ping\`, \`${PREFIX}uptime\``)
      .addField('🎐 Other', `\`${PREFIX}say\`, \`${PREFIX}avatar\`, \`${PREFIX}invite\``)
      .addField('📨 RSS', `\`${PREFIX}rss bdzone\``)
      otherEmbed.setTimestamp()
    message.channel.send(otherEmbed)
    
  }
};
