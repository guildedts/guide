# Creating commands

In this section you will learn how to create simple commands with the `Command` abstract class from the **Guilded.TS framework**.

## Creating a command

Lets start by creating a folder named `commands` in the root directory, this will be used to store your commands. After you have made a `commands` directory, create a file named `ping.{js,ts}` inside it, this will be your **ping** command. Inside the file, add the following:

:::: code-group

::: code-group-item TypeScript

```ts{1-2,4-8}
import { Command } from '@guildedts/framework';
import { Message } from 'guilded.ts';

export default class extends Command {
	execute(message: Message) {
		message.reply('Pong!');
	}
}
```

:::

::: code-group-item CommonJS

```js{1,3-7}
const { Command } = require('@guildedts/framework');

module.exports = class extends Command {
	execute(message) {
		message.reply('Pong!');
	}
}
```

:::

::: code-group-item ESM

```js{1,3-7}
import { Command } from '@guildedts/framework';

export default class extends Command {
	execute(message) {
		message.reply('Pong!');
	}
}
```

:::

::::

#### Examples

-   [JavaScript](https://github.com/guildedts/guide/tree/main/examples/javascript/commands/ping.js)
-   [TypeScript](https://github.com/guildedts/guide/tree/main/examples/typescript/commands/ping.ts)

::: tip
By default, the command name is the name of the file without the extension. For example, `ping.js` is `ping`.
:::

## Using args

:::: code-group

::: code-group-item TypeScript

```ts{1,5-9,11-12}
import { Command, StringArgument } from '@guildedts/framework';
import { Message } from 'guilded.ts';

export default class extends Command {
    arguments = [
        class extends StringArgument {
            name = 'content';
        }
    ]

	execute(message: Message, { content }: { content: string }) {
		message.reply(content);
	}
}
```

:::

::: code-group-item CommonJS

```js{1,4-8,10-11}
const { Command, StringArgument } = require('@guildedts/framework');

module.exports = class extends Command {
    arguments = [
        class extends StringArgument {
            name = 'content';
        }
    ]

	execute(message, { content }) {
		message.reply(content);
	}
}
```

:::

::: code-group-item ESM

```js{1,4-8,10-11}
import { Command, StringArgument } from '@guildedts/framework';

export default class extends Command {
    arguments = [
        class extends StringArgument {
            name = 'content';
        }
    ]

	execute(message, { content }) {
		message.reply(content);
	}
}
```

:::

::::

#### Examples

-   [JavaScript](https://github.com/guildedts/guide/tree/main/examples/javascript/commands/echo.js)
-   [TypeScript](https://github.com/guildedts/guide/tree/main/examples/typescript/commands/echo.ts)

::: tip
There are different types of arguments, see the list below:

-   `Argument`
-   `StringArgument`
-   `BooleanArgument`
-   `NumberArgument`
    :::
