import { defaultTheme, defineUserConfig, Theme } from 'vuepress-vite';
import { searchPlugin } from '@vuepress/plugin-search';
import { navbar } from './configs/navbar';
import { sidebar } from './configs/sidebar';

export default defineUserConfig({
	lang: 'en-US',
	title: 'Guilded.TS Guide',
	description: 'A Guide for creating a Guilded.TS bot.',
	plugins: [searchPlugin({ locales: { '/': { placeholder: 'Search' } } })],
	head: [['link', { rel: 'icon', href: 'https://guildedts.js.org/logo.jpg' }]],
	theme: defaultTheme({
		navbar,
		sidebar,
		sidebarDepth: 3,
		docsRepo: 'guildedts/guide',
		docsDir: 'guide',
		logo: 'https://guildedts.js.org/logo.png',
		repo: 'guildedts/guide',
		editLinkText: 'Edit this page on GitHub',
		contributors: false,
	}),
});
