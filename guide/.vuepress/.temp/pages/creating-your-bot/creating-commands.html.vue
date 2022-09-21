<template><div><h1 id="creating-commands" tabindex="-1"><a class="header-anchor" href="#creating-commands" aria-hidden="true">#</a> Creating commands</h1>
<p>In this section you will learn how to create simple commands with the <code v-pre>Command</code> abstract class from the <strong>Guilded.TS framework</strong>.</p>
<h2 id="creating-a-command" tabindex="-1"><a class="header-anchor" href="#creating-a-command" aria-hidden="true">#</a> Creating a command</h2>
<p>Lets start by creating a folder named <code v-pre>commands</code> in the root directory, this will be used to store your commands. After you have made a <code v-pre>commands</code> directory, create a file named <code v-pre>ping.{js,ts}</code> inside it, this will be your <strong>ping</strong> command. Inside the file, add the following:</p>
<CodeGroup>
<CodeGroupItem title="TypeScript">
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Command <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@guildedts/framework'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'guilded.ts'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name"><span class="token keyword">extends</span></span> Command <span class="token punctuation">{</span>
	<span class="token function">execute</span><span class="token punctuation">(</span>message<span class="token operator">:</span> Message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		message<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">'Pong!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="CommonJS">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> Command <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'@guildedts/framework'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token class-name">extends</span> Command <span class="token punctuation">{</span>
	<span class="token function">execute</span><span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		message<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">'Pong!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="ESM">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Command <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@guildedts/framework'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">extends</span> Command <span class="token punctuation">{</span>
	<span class="token function">execute</span><span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		message<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">'Pong!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<h4 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h4>
<ul>
<li><a href="https://github.com/guildedts/guide/tree/main/examples/javascript/commands/ping.js" target="_blank" rel="noopener noreferrer">JavaScript<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/guildedts/guide/tree/main/examples/typescript/commands/ping.ts" target="_blank" rel="noopener noreferrer">TypeScript<ExternalLinkIcon/></a></li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>By default, the command name is the name of the file without the extension. For example, <code v-pre>ping.js</code> is <code v-pre>ping</code>.</p>
</div>
<h2 id="using-args" tabindex="-1"><a class="header-anchor" href="#using-args" aria-hidden="true">#</a> Using args</h2>
<CodeGroup>
<CodeGroupItem title="TypeScript">
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Command<span class="token punctuation">,</span> StringArgument <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@guildedts/framework'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'guilded.ts'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name"><span class="token keyword">extends</span></span> Command <span class="token punctuation">{</span>
    arguments <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token keyword">class</span> <span class="token class-name"><span class="token keyword">extends</span></span> StringArgument <span class="token punctuation">{</span>
            name <span class="token operator">=</span> <span class="token string">'content'</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>

	<span class="token function">execute</span><span class="token punctuation">(</span>message<span class="token operator">:</span> Message<span class="token punctuation">,</span> <span class="token punctuation">{</span> content <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> content<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		message<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="CommonJS">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> Command<span class="token punctuation">,</span> StringArgument <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'@guildedts/framework'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token class-name">extends</span> Command <span class="token punctuation">{</span>
    arguments <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token keyword">class</span> <span class="token class-name">extends</span> StringArgument <span class="token punctuation">{</span>
            name <span class="token operator">=</span> <span class="token string">'content'</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>

	<span class="token function">execute</span><span class="token punctuation">(</span><span class="token parameter">message<span class="token punctuation">,</span> <span class="token punctuation">{</span> content <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		message<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="ESM">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Command<span class="token punctuation">,</span> StringArgument <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@guildedts/framework'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">extends</span> Command <span class="token punctuation">{</span>
    arguments <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token keyword">class</span> <span class="token class-name">extends</span> StringArgument <span class="token punctuation">{</span>
            name <span class="token operator">=</span> <span class="token string">'content'</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>

	<span class="token function">execute</span><span class="token punctuation">(</span><span class="token parameter">message<span class="token punctuation">,</span> <span class="token punctuation">{</span> content <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		message<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<h4 id="examples-1" tabindex="-1"><a class="header-anchor" href="#examples-1" aria-hidden="true">#</a> Examples</h4>
<ul>
<li><a href="https://github.com/guildedts/guide/tree/main/examples/javascript/commands/echo.js" target="_blank" rel="noopener noreferrer">JavaScript<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/guildedts/guide/tree/main/examples/typescript/commands/echo.ts" target="_blank" rel="noopener noreferrer">TypeScript<ExternalLinkIcon/></a></li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>There are different types of arguments, see the list below:</p>
<ul>
<li><code v-pre>Argument</code></li>
<li><code v-pre>StringArgument</code></li>
<li><code v-pre>BooleanArgument</code></li>
<li><code v-pre>NumberArgument</code>
:::</li>
</ul>
</div>
</div></template>


