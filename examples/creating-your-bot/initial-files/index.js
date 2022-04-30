const { Client } = require('guilded.js');
const { token } = require('./config.json');

const client = new Client();

client.once('ready', () => {
  console.log('Ready!');
});

client.login(token);
