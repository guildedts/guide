<template><div><h1 id="preparation" tabindex="-1"><a class="header-anchor" href="#preparation" aria-hidden="true">#</a> Preparation</h1>
<h2 id="installing-node-js" tabindex="-1"><a class="header-anchor" href="#installing-node-js" aria-hidden="true">#</a> Installing Node.JS</h2>
<p>If not already, install <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">Node.JS<ExternalLinkIcon/></a>. This is a <strong>required step</strong> to be able to use <strong>Guilded.TS</strong> as we will be using node's <strong>package manager</strong> to install <strong>Guilded.TS</strong>.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>To check if you already have Node.JS installed on your machine, run <code v-pre>node -v</code> in your terminal. If it shows a version, then you're good to go (around <strong>v16</strong> is a recommended version of <strong>Node.JS</strong> at the moment since we do not know a specific version quite yet).</p>
</div>
<h2 id="initiating-a-project" tabindex="-1"><a class="header-anchor" href="#initiating-a-project" aria-hidden="true">#</a> Initiating a project</h2>
<CodeGroup>
<CodeGroupItem title="NPM">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> init
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Yarn">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> init
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="PNPM">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> init
</code></pre></div></CodeGroupItem>
</CodeGroup>
<h2 id="installing-required-dependencies" tabindex="-1"><a class="header-anchor" href="#installing-required-dependencies" aria-hidden="true">#</a> Installing required dependencies</h2>
<p>After you have setup your project, you can now finally install <strong>Guilded.TS</strong> along with the <strong>Guilded.TS framework</strong>. We will be using the framework for its built-in command and event handling.</p>
<CodeGroup>
<CodeGroupItem title="NPM">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> guilded.ts @guildedts/framework
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Yarn">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> guilded.ts @guildedts/framework
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="PNPM">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> guilded.ts @guildedts/framework
</code></pre></div></CodeGroupItem>
</CodeGroup>
</div></template>


