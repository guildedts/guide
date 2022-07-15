# Setting up a bot

::: tip
If you already have a bot, skip to [Getting your bot token](#getting-your-bot-token).
:::

## Creating a bot

To create a **Guilded Bot**, Go into the setting of the server you want to create a bot in, then go to the `Bots` tab. After that click the `Create a bot` button.

![Bots page](/bots-page.jpg)

Now, fill in your desired information for your bot.

![Create a bot page](/create-a-bot-page.jpg)

::: warning
Since we are using the bot API, you will not need flows.
:::

## Getting your bot token

After you have created your bot, go back to the `Bots` page and click the three dots beside your created bot.

![Bot context menu](/bot-context-menu.jpg)

Now click the `Manage auth tokens` button and press `Generate token` to generate an auth token. This token will be used for logging into your bot, so make sure you save it.

::: danger
Keep this token private.
:::

![Auth tokens menu](/auth-tokens-menu.jpg)
