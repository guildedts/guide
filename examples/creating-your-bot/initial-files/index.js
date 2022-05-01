// Import the Client class
const { Client } = require('guilded.ts');

// Create a client instance
const client = new Client();

// Wait until the bot is ready to use
client.once('ready', () => console.log('Ready!'));

// Login to Guilded with your bot token
client.login(token);
