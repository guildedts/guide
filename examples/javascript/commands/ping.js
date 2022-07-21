const { Command } = require('@guildedts/framework');

module.exports = class extends Command {
	execute(message) {
		message.reply('Pong!');
	}
};
