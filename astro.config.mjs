import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '宝宝巴士也能学会的Nai3Bot指南',
			description: '一个关于接入NovelAi的基于云崽bot的绘画机器人使用指南。',
			favicon: './my-logo.ico',
			customCss: [
				// 你的自定义 CSS 文件的相对路径
				'./src/styles/custom.css',
			],
			social: {
				github: 'https://github.com/misaka20002',
				instagram: 'https://www.pixiv.net/users/3289652',
				blueSky: 'https://space.bilibili.com/1956145',
			},
			sidebar: [
				{
					label: '欢迎',
					// 自动生成一个链接分组。
					autogenerate: { directory: '欢迎' },
				},
				{
					label: '结语',
					// 自动生成一个链接分组。
					autogenerate: { directory: '结语' },
				},
				{
					label: 'Bot部署配置',
					// 自动生成一个链接分组。
					autogenerate: { directory: 'Bot部署配置' },
				},
			],
		}),
	],
});
