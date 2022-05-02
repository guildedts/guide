# Creating commands

In this section you will learn how to create simple commands with the `messageCreate` event. We will be starting with the following code:

```js
// Import the Client class
const { Client } = require('guilded.ts');

// Create a client instance
const client = new Client();

// Wait until the bot is ready to use
client.once('ready', () => console.log('Ready!'));

// Login to Guilded with your bot token
client.login(token);
```

## Listening for messages

To listen to message we will be using the `messageCreate` event. Add the following code:

```js{11,14,17-18}
// Import the Client class
const { Client } = require('guilded.ts');

// Create a client instance
const client = new Client();

// Wait until the bot is ready to use
client.once('ready', () => console.log('Ready!'));

// Wait for a message to be sent in a channel
client.on('messageCreate', message => {
    // Ceck if the user who created the message isnt the bot
    // This will prevent rate limits
    if(messgae.createdBy === client.user.id) return;

    // Reply to the message
    message.reply('Hello friend!')
});

// Login to Guilded with your bot token
client.login(token);
```

::: tip
The `if(messgae.createdBy === client.user.id) return;` code is there to prevent a loop of replies to the bot itself.
:::

The code above tells the bot to wait for a message to be sent inside a channel then reply to the message with `Hello friend!` only if the user who sent the message isnt the bot itself.

## Parsing message content

Parsing message content is the way we will be getting our command name and the inputed args.

Add the following code:

```js{17}
// Import the Client class
const { Client } = require('guilded.ts');

// Create a client instance
const client = new Client();

// Wait until the bot is ready to use
client.once('ready', () => console.log('Ready!'));

// Wait for a message to be sent in a channel
client.on('messageCreate', message => {
    // Ceck if the user who created the message isnt the bot
    // This will prevent rate limits
    if(messgae.createdBy === client.user.id) return;

    // Split the content and get the name and args
    const [ name, ...args ] = message.content.split(' ');

    // Reply to the message
    message.reply('Hello friend!');
});

// Login to Guilded with your bot token
client.login(token);
```

### Making commands

Add a case switch for the command name:

```js{20,22-24}
// Import the Client class
const { Client } = require('guilded.ts');

// Create a client instance
const client = new Client();

// Wait until the bot is ready to use
client.once('ready', () => console.log('Ready!'));

// Wait for a message to be sent in a channel
client.on('messageCreate', message => {
    // Ceck if the user who created the message isnt the bot
    // This will prevent rate limits
    if(messgae.createdBy === client.user.id) return;

    // Split the content and get the name and args
    const [ name, ...args ] = message.content.split(' ');

    // Check which command was executed
    switch(name) {
        // If the command is "ping"
        case 'ping':
            message.reply('Pong!');
    }
});

// Login to Guilded with your bot token
client.login(token);
```

### Using args

```js{25,27}
// Import the Client class
const { Client } = require('guilded.ts');

// Create a client instance
const client = new Client();

// Wait until the bot is ready to use
client.once('ready', () => console.log('Ready!'));

// Wait for a message to be sent in a channel
client.on('messageCreate', message => {
    // Ceck if the user who created the message isnt the bot
    // This will prevent rate limits
    if(messgae.createdBy === client.user.id) return;

    // Split the content and get the name and args
    const [ name, ...args ] = message.content.split(' ');

    // Check which command was executed
    switch(name) {
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
```
