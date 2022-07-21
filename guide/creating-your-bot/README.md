# Starting your bot

Assuming you have created your bot, you can now start coding and get your bot online! Lets start by adding a configuration file.

## Creating a configuration file

Now that you have you bot token while [getting your bot token](//getting-started/setting-up-a-bot.html#getting-your-bot-token), we can not create a config file for the **Guilded.TS framework** to read.

::: warning
This is required for the **Guilded.TS framework** to be able to login with your bot's token.
:::

Create a `gtsconfig.{json,js,ts}` in the root of your project and add the following:

:::: code-group
::: code-group-item JSON

```json{1-3}
{
    "token": "token"
}
```

:::
::: code-group-item TypeScript

```ts{1}
export const token = 'token';
```

:::
::: code-group-item CommonJS

```js{1-3}
module.exports = {
    token: 'token'
}
```

:::
::: code-group-item ESM

```js{1}
export const token = 'token';
```

:::
::::

## `.gitignore`

It is important to ignore files and folders that are not needed or have sensetive information like your bot token. If you are committing your progress to a platform like [GitHub](https://github.com), create a `.gitignore` file in your root directory then add the following inside:

```{1-2}
node_modules
gtsconfig.{json,js,ts}
```

::: tip
`node_modules` should **never** be committed to your repository considering that you can generate this folder by installing your dependencies. Your dependencies are saved in the `package.json` file.
:::

## Starting your bot

Now that you probably have your configuration done by now, you can now finally get started with getting your bot online! We have two options for Starting your bot:

1. Use the CLI from the framework
2. Create a custom client

::: tip
If you plan on writing your commands/events in TypeScript, we recommend creating a custom client and running it with [ts-node](https://npmjs.org/ts-node).
:::

### Using the CLI

Run the following command in the terminal:

:::: code-group
::: code-group-item Development mode

```sh{1}
gts dev
```

:::
::: code-group-item Production mode

```sh{1}
gts start
```

:::
::::

### Creating a custom client

Create a `index.{js,ts}` file in the root of your project and add the following:

:::: code-group
::: code-group-item TypeScript

```ts{1,3,5}
import Client from '@guildedts/framework';

const dev = process.argv.includes('--dev');

new Client({ dev });
```

:::
::: code-group-item CommonJS

```js{1,3,5}
const { Client } = require('@guildedts/framework');

const dev = process.argv.includes('--dev');

new Client({ dev });
```

:::
::: code-group-item ESM

```js{1,3,5}
import Client from '@guildedts/framework';

const dev = process.argv.includes('--dev');

new Client({ dev });
```

:::
::::

#### Examples

-   [JavaScript](https://github.com/guildedts/guide/tree/main/examples/javascript/index.js)
-   [TypeScript](https://github.com/guildedts/guide/tree/main/examples/typescript/index.ts)

Now that you have created a custom client, you can now run `node index.js` (`ts-node index.ts` for [ts-node](https://npmjs.org/ts-node)).

::: tip
You can add `"main": "index.js"` in your `package.json` so you can use `node .`. You can also include a script like `"scripts": { "start": "node ." }` (`"scripts": { "start": "ts-node index" }` for [ts-node](https://npmjs.org/ts-node)) to be able to run `npm start` or `npm run start`.

You can also stop the current process by pressing `Ctrl + C` and then press the up arrow to show the last command in your terminal.
:::
