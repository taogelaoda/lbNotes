import { defineConfig, type DefaultTheme } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: 'Lb Notes',
	description: '来邦前端公共文档',
	base: '/resource/notes/',
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: '首页', link: '/' },
			{ text: 'Uniapp', link: '/uniapp/dev/01' },
			{ text: 'Vue', link: '/vue/dev/01' },
			{ text: 'Weapp', link: '/weapp/dev/01' },
			{
				text: '其他',
				items: [
					{
						text: '写作规范',
						link: '/others/write/01',
					},
				],
			},
		],
		sidebar: {
			'/vue/': { base: '/vue/', items: getVueSideBar() },
			'/uniapp/': { base: '/uniapp/', items: getUniappSideBar() },
			'/weapp/': { base: '/weapp/', items: getWeappSideBar() },
			'/others/': { base: '/others/', items: getOthersSideBar() },
		},
		docFooter: {
			prev: '上一页',
			next: '下一页',
		},
		outline: {
			label: '页面导航',
			level: 'deep',
		},
		lastUpdated: {
			text: '最后更新于',
			formatOptions: {
				dateStyle: 'short',
				timeStyle: 'medium',
			},
		},
		langMenuLabel: '多语言',
		returnToTopLabel: '回到顶部',
		sidebarMenuLabel: '菜单',
		darkModeSwitchLabel: '主题',
		lightModeSwitchTitle: '切换到浅色模式',
		darkModeSwitchTitle: '切换到深色模式',
	},
	markdown: {
		lineNumbers: true,
	},
});
// 获取vue的侧边栏
function getVueSideBar(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: '开发问题',
			collapsed: false,
			items: [],
		},
		{
			text: '框架问题',
			collapsed: false,
			items: [{ text: '细节与踩坑', link: 'vue/01' }],
		},
		{
			text: '其他问题',
			collapsed: false,
			items: [],
		},
	];
}
// 获取uniapp的侧边栏
function getUniappSideBar(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: '开发问题',
			collapsed: false,
			items: [{ text: 'uniapp中实现海报分享', link: 'dev/01' }],
		},
		{
			text: '框架问题',
			collapsed: false,
			items: [{ text: '细节与踩坑', link: 'uni/01' }],
		},
		{
			text: '其他问题',
			collapsed: false,
			items: [],
		},
	];
}
// 获取weapp的侧边栏
function getWeappSideBar(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: '开发问题',
			collapsed: false,
			items: [],
		},
		{
			text: '框架问题',
			collapsed: false,
			items: [{ text: '细节与踩坑', link: 'weapp/01' }],
		},
		{
			text: '其他问题',
			collapsed: false,
			items: [],
		},
	];
}
// 获取其他的侧边栏
function getOthersSideBar(): DefaultTheme.SidebarItem[] {
	return [{
		text:'写作规范',link:'write/01'
	}];
}
