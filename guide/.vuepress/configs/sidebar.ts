import { SidebarConfig } from 'vuepress-vite';

export const sidebar: SidebarConfig = [
	{ text: 'Home', children: ['/', '/Contributing.md'] },
	{
		text: 'Getting started',
		children: [
			'/getting-started/',
			'/getting-started/setting-up-a-bot.md',
			'/getting-started/publishing-your-bot.md',
		],
	},
	{
		text: 'Creating your bot',
		children: [
			'/creating-your-bot/',
			'/creating-your-bot/creating-commands.md',
			'/creating-your-bot/listening-for-events.md',
		],
	},
];
