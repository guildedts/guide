import Client, { Event } from '@guildedts/framework';

export default class extends Event {
	execute(Client: Client) {
		console.log(`Logged in as ${Client.user?.name}`);
	}
}
