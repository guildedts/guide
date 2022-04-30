import { SidebarConfig } from 'vuepress-vite';

export const sidebar: SidebarConfig = [
	{
		text: 'Home',
		link: '/',
		collapsible: true,
		children: ['/', '/Contributing.html'],
	},
	{
		text: 'Getting started',
		link: '/getting-started/',
		collapsible: true,
		children: [
			'/getting-started/',
			'/getting-started/setting-up-a-bot.html',
			'/getting-started/publishing-your-bot.html',
		],
	},
	{
		text: 'Creating your bot',
		link: '/creating-your-bot/',
		collapsible: true,
		children: [
			'/creating-your-bot/',
			'/creating-your-bot/creating-commands.html',
			'/creating-your-bot/command-handling.html',
			'/creating-your-bot/event-handling.html',
		],
	},
];
