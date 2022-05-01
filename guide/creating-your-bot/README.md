# Initial files

Assuming you have created your bot, you can now start coding and get your bot online! Lets start by adding a configuration file.

## Creating configuration files

Now that you have you bot token while [getting your bot token](//getting-started/setting-up-a-bot.html#getting-your-bot-token), you need to protect this token at all costs. This token is basically your bots password.

To prevent your bot token from being pushed to your repository, we will be using either a `config.json` file or **environment variables** to store your token.

### Using `config.json`

Storing sensitive information via a `config.json` is a very common method. You can access your token in any file by importing it.

:::: code-group
::: code-group-item config.json

```json{1-3}
{
    "token": "your-bot-token"
}
```

:::
::: code-group-item Usage

```js{1,3}
const { token } = require('./config.json');

console.log(token);
```

:::
::::

::: danger
If you're using Git, ignore the `config.json` file via `.gitignore`.
:::

### Using environment variables

Environment variables are also a common way to store sensetive information, except they are defined inside the terminal.

:::: code-group
::: code-group-item Terminal

```sh{1}:no-line-numbers
GUILDED_TOKEN=your-bot-token node index.js
```

:::
::: code-group-item Usage

```js{1}
console.log(process.env.GUILDED_TOKEN);
```

:::
::::

### Using dotenv

DotENV is the best option for using environment variables because you can add your values inside a `.env` file using `KEY=value` syntax instead of having to paste your token into the terminal every time you run your bot.

:::: code-group
::: code-group-item NPM

```sh{1}:no-line-numbers
npm install dotenv
```

:::
::: code-group-item Yarn

```sh{1}:no-line-numbers
yarn add dotenv
```

:::
::: code-group-item PNPM

```sh{1}:no-line-numbers
pnpm add dotenv
```

:::
::::

:::: code-group
::: code-group-item .env

```sh{1}
GUILDED_TOKEN=your-bot-token
```

:::
::: code-group-item Usage

```js{1,3,5}
const dotenv = require('dotenv');

dotenv.config();

console.log(process.env.GUILDED_TOKEN);
```

:::
::::

::: danger
If you're using Git, ignore the `.env` file via `.gitignore`.
:::

### `.gitignore`

It is important to ignore files and folders that are not needed or have sensetive information like your bot token. If you are committing your progress to a platform like [GitHub](https://github.com), create a `.gitignore` file in your root directory then add the following inside:

```{1-3}
node_modules
config.json
.env
```

::: tip
`node_modules` should **never** be committed to your repository considering that you can generate this folder by installing your dependencies. Your dependencies are saved in the `package.json` file.
:::

## Creating the main file

Now that you probably have your configuration done by now, you can now finally get started with getting your bot online! In your editor, create a new file. We recommend calling this file `index.js` since this is the main file for your bot.

```js{2,5,8,11}
// Import the Client class
const { Client } = require('guilded.ts');

// Create a client instance
const client = new Client();

// Wait until the bot is ready to use
client.once('ready', () => console.log('Ready!'));

// Login to Guilded with your bot token
client.login(token);
```

Now that you have added the most minimal code for your bot to come online, run `node index.js` in your terminal to start your bot.

::: tip
You can add `"main": "index.js"` so you can use `node .`. You can also include a script like `"scripts": { "start": "node ." }` to be able to run `npm start` or `npm run start`.
:::

## Resulting code

If you want to check over the code we have shown, you can view it in our GitHub repository [here](https://github.com/guildedts/guide/tree/main/examples/creating-your-bot/initial-files).
