// Import the Client class
const { Client } = require('guilded.ts');
// Import the config file
const [ token ] = require('./config.json');

// Create a client instance
const client = new Client();

// Emitted when the bot is ready to use
client.once('ready', () => console.log('Ready!'));

// Emitted when a message is sent
client.on('messageCreate', (message) => {

	// Make sure the bot doesnt reply to itself
	// This will prevent rate limits
    if (message.author?.isBot) return;
    
	// Split the content and get the name and args
	const [name, ...args] = message.content.split(' ');
	// Check which command was executed
	switch (name) {
		// If the command is "ping"
		case 'ping':
			message.reply('Pong!');
			break;
		// If the command is "echo"
		case 'echo':
			// Reply with the users input by joining the args with a space between
			message.reply(args.join(' '));
			break;
	}
});

// Login to Guilded with your bot token
client.login(token);
