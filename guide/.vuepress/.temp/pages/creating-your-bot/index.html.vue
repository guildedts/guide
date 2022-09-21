<template><div><h1 id="starting-your-bot" tabindex="-1"><a class="header-anchor" href="#starting-your-bot" aria-hidden="true">#</a> Starting your bot</h1>
<p>Assuming you have created your bot, you can now start coding and get your bot online! Lets start by adding a configuration file.</p>
<h2 id="creating-a-configuration-file" tabindex="-1"><a class="header-anchor" href="#creating-a-configuration-file" aria-hidden="true">#</a> Creating a configuration file</h2>
<p>Now that you have you bot token while <a href="//getting-started/setting-up-a-bot.html#getting-your-bot-token" target="_blank" rel="noopener noreferrer">getting your bot token<ExternalLinkIcon/></a>, we can not create a config file for the <strong>Guilded.TS framework</strong> to read.</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>This is required for the <strong>Guilded.TS framework</strong> to be able to login with your bot's token.</p>
</div>
<p>Create a <code v-pre>gtsconfig.{json,js,ts,yml,yaml}</code> in the root of your project and add the following:</p>
<CodeGroup>
<CodeGroupItem title="JSON">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"$schema"</span><span class="token operator">:</span> <span class="token string">"https://guildedts.js.org/media/gtsconfig-schema.json"</span><span class="token punctuation">,</span>
    <span class="token property">"token"</span><span class="token operator">:</span> <span class="token string">"token"</span><span class="token punctuation">,</span>
    <span class="token property">"prefix"</span><span class="token operator">:</span> <span class="token string">"!"</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="TypeScript">
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ClientConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@guildedts/framework'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    token<span class="token operator">:</span> <span class="token string">'token'</span><span class="token punctuation">,</span>
    prefix<span class="token operator">:</span> <span class="token string">'!'</span>
<span class="token punctuation">}</span> <span class="token keyword">as</span> ClientConfig<span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="CommonJS">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">token</span><span class="token operator">:</span> <span class="token string">'token'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">prefix</span><span class="token operator">:</span> <span class="token string">'!'</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="ESM">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">token</span><span class="token operator">:</span> <span class="token string">'token'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">prefix</span><span class="token operator">:</span> <span class="token string">'!'</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="YML/YAML">
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">token</span><span class="token punctuation">:</span> token
<span class="token key atrule">prefix</span><span class="token punctuation">:</span> <span class="token string">'!'</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<h2 id="gitignore" tabindex="-1"><a class="header-anchor" href="#gitignore" aria-hidden="true">#</a> <code v-pre>.gitignore</code></h2>
<p>It is important to ignore files and folders that are not needed or have sensetive information like your bot token. If you are committing your progress to a platform like <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub<ExternalLinkIcon/></a>, create a <code v-pre>.gitignore</code> file in your root directory then add the following inside:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>node_modules
gtsconfig.{json,js,ts,yml,yaml}
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p><code v-pre>node_modules</code> should <strong>never</strong> be committed to your repository considering that you can generate this folder by installing your dependencies. Your dependencies are saved in the <code v-pre>package.json</code> file.</p>
</div>
<h2 id="starting-your-bot-1" tabindex="-1"><a class="header-anchor" href="#starting-your-bot-1" aria-hidden="true">#</a> Starting your bot</h2>
<p>Now that you probably have your configuration done by now, you can now finally get started with getting your bot online! We have two options for Starting your bot:</p>
<ol>
<li>Use the CLI from the framework</li>
<li>Create a custom client</li>
</ol>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>If you plan on writing your commands/events in TypeScript, we recommend creating a custom client and running it with <a href="https://npmjs.org/ts-node" target="_blank" rel="noopener noreferrer">ts-node<ExternalLinkIcon/></a>.</p>
</div>
<h3 id="using-the-cli" tabindex="-1"><a class="header-anchor" href="#using-the-cli" aria-hidden="true">#</a> Using the CLI</h3>
<p>Run the following command in the terminal:</p>
<CodeGroup>
<CodeGroupItem title="Development mode">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>gts dev
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="Production mode">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>gts start
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<h3 id="creating-a-custom-client" tabindex="-1"><a class="header-anchor" href="#creating-a-custom-client" aria-hidden="true">#</a> Creating a custom client</h3>
<p>Create a <code v-pre>index.{js,ts}</code> file in the root of your project and add the following:</p>
<CodeGroup>
<CodeGroupItem title="TypeScript">
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> Client <span class="token keyword">from</span> <span class="token string">'@guildedts/framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> dev <span class="token operator">=</span> process<span class="token punctuation">.</span>argv<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">'--dev'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">new</span> <span class="token class-name">Client</span><span class="token punctuation">(</span><span class="token punctuation">{</span> dev <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="CommonJS">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> Client <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'@guildedts/framework'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> dev <span class="token operator">=</span> process<span class="token punctuation">.</span>argv<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">'--dev'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">new</span> <span class="token class-name">Client</span><span class="token punctuation">(</span><span class="token punctuation">{</span> dev <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="ESM">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Client <span class="token keyword">from</span> <span class="token string">'@guildedts/framework'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> dev <span class="token operator">=</span> process<span class="token punctuation">.</span>argv<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">'--dev'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">new</span> <span class="token class-name">Client</span><span class="token punctuation">(</span><span class="token punctuation">{</span> dev <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<h4 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h4>
<ul>
<li><a href="https://github.com/guildedts/guide/tree/main/examples/javascript/index.js" target="_blank" rel="noopener noreferrer">JavaScript<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/guildedts/guide/tree/main/examples/typescript/index.ts" target="_blank" rel="noopener noreferrer">TypeScript<ExternalLinkIcon/></a></li>
</ul>
<p>Now that you have created a custom client, you can now run <code v-pre>node index.js</code> (<code v-pre>ts-node index.ts</code> for <a href="https://npmjs.org/ts-node" target="_blank" rel="noopener noreferrer">ts-node<ExternalLinkIcon/></a>).</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>You can add <code v-pre>&quot;main&quot;: &quot;index.js&quot;</code> in your <code v-pre>package.json</code> so you can use <code v-pre>node .</code>. You can also include a script like <code v-pre>&quot;scripts&quot;: { &quot;start&quot;: &quot;node .&quot; }</code> (<code v-pre>&quot;scripts&quot;: { &quot;start&quot;: &quot;ts-node index&quot; }</code> for <a href="https://npmjs.org/ts-node" target="_blank" rel="noopener noreferrer">ts-node<ExternalLinkIcon/></a>) to be able to run <code v-pre>npm start</code> or <code v-pre>npm run start</code>.</p>
<p>You can also stop the current process by pressing <code v-pre>Ctrl + C</code> and then press the up arrow to show the last command in your terminal.</p>
</div>
</div></template>


