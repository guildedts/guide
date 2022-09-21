<template><div><h1 id="listening-for-events" tabindex="-1"><a class="header-anchor" href="#listening-for-events" aria-hidden="true">#</a> Listening for Events</h1>
<p>In this section you will learn how to listen for events with the <code v-pre>Event</code> abstract class from the <strong>Guilded.TS framework</strong>. Lets start by creating a folder named <code v-pre>events</code> in the root directory, this will be used to store your events. After you have made a <code v-pre>events</code> directory, create a file named <code v-pre>ready.{js,ts}</code> inside it, this will be your <strong>ready</strong> event listener. Inside the file, add the following:</p>
<CodeGroup>
<CodeGroupItem title="TypeScript">
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> Client<span class="token punctuation">,</span> <span class="token punctuation">{</span> Event <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@guildedts/framework'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name"><span class="token keyword">extends</span></span> Event <span class="token punctuation">{</span>
	<span class="token function">execute</span><span class="token punctuation">(</span>client<span class="token operator">:</span> Client<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Logged in as </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>client<span class="token punctuation">.</span>user<span class="token operator">?.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="CommonJS">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> Event <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'@guildedts/framework'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token class-name">extends</span> Event <span class="token punctuation">{</span>
	<span class="token function">execute</span><span class="token punctuation">(</span><span class="token parameter">client</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Logged in as </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>client<span class="token punctuation">.</span>user<span class="token operator">?.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="ESM">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Event <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@guildedts/framework'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">extends</span> Event <span class="token punctuation">{</span>
	<span class="token function">execute</span><span class="token punctuation">(</span><span class="token parameter">client</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Logged in as </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>client<span class="token punctuation">.</span>user<span class="token operator">?.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<h4 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h4>
<ul>
<li><a href="https://github.com/guildedts/guide/tree/main/examples/javascript/events/ready.js" target="_blank" rel="noopener noreferrer">JavaScript<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/guildedts/guide/tree/main/examples/typescript/events/ready.ts" target="_blank" rel="noopener noreferrer">TypeScript<ExternalLinkIcon/></a></li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>By default, the event name is the name of the file without the extension. For example, <code v-pre>ready.js</code> is <code v-pre>ready</code>.</p>
</div>
</div></template>


