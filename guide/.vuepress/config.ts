import { defaultTheme, defineUserConfig, Theme } from 'vuepress-vite';
import { searchPlugin } from '@vuepress/plugin-search';
import { navbar, sidebar } from './configs';

export default defineUserConfig({
	lang: 'en-US',
	title: 'Guilded.TS Guide',
	description: 'A Guide for creating a Guilded.TS bot.',
	plugins: [searchPlugin()],
	head: [['link', { rel: 'icon', href: '/logo.jpg' }]],
	theme: defaultTheme({
		navbar,
		sidebar,
		sidebarDepth: 3,
		docsRepo: 'guildedts/guide',
		docsDir: 'guide',
		logo: '/logo.jpg',
		repo: 'guildedts/guide',
		editLinkText: 'Edit this page on GitHub',
		contributors: false,
	}),
});
