<template><div><h1 id="setting-up-a-bot" tabindex="-1"><a class="header-anchor" href="#setting-up-a-bot" aria-hidden="true">#</a> Setting up a bot</h1>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>If you already have a bot, skip to <a href="#getting-your-bot-token">Getting your bot token</a>.</p>
</div>
<h2 id="creating-a-bot" tabindex="-1"><a class="header-anchor" href="#creating-a-bot" aria-hidden="true">#</a> Creating a bot</h2>
<p>To create a <strong>Guilded Bot</strong>, Go into the setting of the server you want to create a bot in, then go to the <code v-pre>Bots</code> tab. After that click the <code v-pre>Create a bot</code> button.</p>
<p><img src="/bots-page.jpg" alt="Bots page"></p>
<p>Now, fill in your desired information for your bot.</p>
<p><img src="/create-a-bot-page.jpg" alt="Create a bot page"></p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>Since we are using the bot API, you will not need flows.</p>
</div>
<h2 id="getting-your-bot-token" tabindex="-1"><a class="header-anchor" href="#getting-your-bot-token" aria-hidden="true">#</a> Getting your bot token</h2>
<p>After you have created your bot, go back to the <code v-pre>Bots</code> page and click the three dots beside your created bot.</p>
<p><img src="/bot-context-menu.jpg" alt="Bot context menu"></p>
<p>Now click the <code v-pre>Manage auth tokens</code> button and press <code v-pre>Generate token</code> to generate an auth token. This token will be used for logging into your bot, so make sure you save it.</p>
<div class="custom-container danger"><p class="custom-container-title">DANGER</p>
<p>Keep this token private.</p>
</div>
<p><img src="/auth-tokens-menu.jpg" alt="Auth tokens menu"></p>
</div></template>


