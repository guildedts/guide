# Listening for Events

In this section you will learn how to listen for events with the `Event` abstract class from the **Guilded.TS framework**. Lets start by creating a folder named `events` in the root directory, this will be used to store your events. After you have made a `events` directory, create a file named `ready.{js,ts}` inside it, this will be your **ready** event listener. Inside the file, add the following:

:::: code-group

::: code-group-item TypeScript

```ts{1,3-7}
import Client, { Event } from '@guildedts/framework';

export default class extends Event {
	execute(client: Client) {
		console.log(`Logged in as ${client.user?.name}`);
	}
}
```

:::

::: code-group-item CommonJS

```js{1,3-7}
const { Event } = require('@guildedts/framework');

module.exports = class extends Event {
	execute(client) {
		console.log(`Logged in as ${client.user?.name}`);
	}
}
```

:::

::: code-group-item ESM

```js{1,3-7}
import { Event } from '@guildedts/framework';

export default class extends Event {
	execute(client) {
		console.log(`Logged in as ${client.user?.name}`);
	}
}
```

:::

::::

#### Examples

-   [JavaScript](https://github.com/guildedts/guide/tree/main/examples/javascript/events/ready.js)
-   [TypeScript](https://github.com/guildedts/guide/tree/main/examples/typescript/events/ready.ts)

::: tip
By default, the event name is the name of the file without the extension. For example, `ready.js` is `ready`.
:::
