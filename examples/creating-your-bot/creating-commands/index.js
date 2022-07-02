// Import the Client class
const { Client } = require('guilded.ts');

// Create a client instance
const client = new Client();

// Wait until the bot is ready to use
client.once('ready', () => console.log('Ready!'));

// Wait for a message to be sent in a channel
client.on('messageCreate', (message) => {
	// Check if the user who created the message isnt the bot
	// This will prevent rate limits
    if (message.author?.isBot) return;

	// Split the content and get the name and args
	const [name, ...args] = message.content.split(' ');

	// Check which command was executed
	switch (name) {
		// If the command is "ping"
		case 'ping':
			message.reply('Pong!');
		// If the command is "echo"
		case 'echo':
			// Reply with the users input by joining the args with a space between
			message.reply(args.join(' '));
	}
});

// Login to Guilded with your bot token
client.login(token);
