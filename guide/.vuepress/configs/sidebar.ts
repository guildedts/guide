import { SidebarConfig } from 'vuepress-vite';

export const sidebar: SidebarConfig = [
	{
		text: 'Home',
		link: '/',
		collapsible: true,
		children: [
			{
				text: 'Introduction',
				link: '/',
			},
			{
				text: 'Contributing',
				link: '/Contributing.html',
			},
		],
	},
	{
		text: 'Getting started',
		link: '/getting-started',
		collapsible: true,
		children: [
			{
				text: 'Preparation',
				link: '/getting-started',
			},
			{
				text: 'Setting up a bot',
				link: '/getting-started/setting-up-a-bot.html',
			}
		],
	},
];
