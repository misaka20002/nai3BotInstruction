import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'NovelAi-Bot指南',
			description: '一个关于接入NovelAi的基于云崽bot的绘画机器人使用指南。',
			favicon: './my-logo.ico',
			customCss: [
				// 你的自定义 CSS 文件的相对路径
				'./src/styles/custom.css',
			],
			social: [
				{ label: 'GitHub', icon: 'github', href: 'https://github.com/misaka20002' },
				{ label: 'Pixiv', icon: 'instagram', href: 'https://www.pixiv.net/users/3289652' },
				{ label: 'Bilibili', icon: 'twitter', href: 'https://space.bilibili.com/1956145' },
			],
			sidebar: [
				{
					label: 'Nai3bot指南',
					// 自动生成一个链接分组。
					autogenerate: { directory: 'nai3bot指南' },
				},
				{
					label: '关于我们',
					// 自动生成一个链接分组。
					autogenerate: { directory: '关于我们' },
				},
				{
					label: '法典',
					// 自动生成一个链接分组。
					autogenerate: { directory: '法典' },
				},
				{
					label: 'Bot部署配置',
					// 自动生成一个链接分组。
					autogenerate: { directory: 'devhelp' },
				},
			],
		}),
	],
});
