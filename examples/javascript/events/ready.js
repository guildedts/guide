const { Event } = require('@guildedts/framework');

module.exports = class extends Event {
	execute(client) {
		console.log(`Logged in as ${client.user?.name}`);
	}
};
