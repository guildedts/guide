const { Command, StringArgument } = require('@guildedts/framework');

module.exports = class extends Command {
	arguments = [
		class extends StringArgument {
			name = 'content';
		},
	];

	execute(message, { content }) {
		message.reply(content);
	}
};
