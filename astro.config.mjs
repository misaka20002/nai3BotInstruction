import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '宝宝巴士也能学会的Nai3Bot指南',
			favicon: './my-logo.ico',
			customCss: [
				// 你的自定义 CSS 文件的相对路径
				'./src/styles/custom.css',
			],
			social: {
				github: 'https://github.com/misaka20002',
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
			],
		}),
	],
});
