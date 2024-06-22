import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '宝宝巴士也能学会的Nai3Bot指南',
			favicon: './src/assets/my-logo.ico',
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
