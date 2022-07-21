import { Command, StringArgument } from '@guildedts/framework';
import { Message } from 'guilded.ts';

export default class extends Command {
	arguments = [
		class extends StringArgument {
			name = 'content';
		},
	];

	execute(message: Message, { content }: { content: string }) {
		message.reply(content);
	}
}
