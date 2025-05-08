import { defineConfig, type DefaultTheme } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: 'Web Notes',
	description: '来邦前端公共文档',
	base: '/resource/notes/',
	themeConfig: {
		algolia: {
			apiKey: '3efa538d282edf27cb9edec74e7d7bd4',
			indexName: 'nbtest-lonbon',
			appId: 'ODSIFFK52F',
			...getSearchOptions(),
		},
		// https://vitepress.dev/reference/default-theme-config
		// search: {
		// 	provider: 'local',
		// },
		nav: [
			{ text: '首页', link: '/' },
			{ text: 'Vue', link: '/vue/dev/01' },
			{
				text: 'React',
				items: [
					{
						text: 'React',
						link: '/react/dev/01',
					},
					{
						text: 'NextJS',
						link: '/react/next/01',
					},
				],
			},
			{ text: 'Uniapp', link: '/uniapp/dev/01' },
			{ text: '工具包', link: '/tools/npm/lonbon-common' },
			{
				text: '其他',
				items: [
					{
						text: '相关规范',
						link: '/others/write/01',
					},
					{
						text: '调研总结',
						link: '/research/01',
					},
				],
			},
		],
		sidebar: {
			'/vue/': { base: '/vue/', items: getVueSideBar() },
			'/uniapp/': { base: '/uniapp/', items: getUniappSideBar() },
			'/weapp/': { base: '/weapp/', items: getWeappSideBar() },
			'/tools/': { base: '/tools/', items: getToolsSideBar() },
			'/node/': { base: '/node/', items: getNodeSideBar() },
			'/others/': { base: '/others/', items: getOthersSideBar() },
			'/research/': { base: '/research/', items: getResearchSideBar() },
			'/react/': { base: '/react/', items: getReactSideBar() },
			'/next/': { base: '/next/', items: getNextSideBar() },
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
		// lineNumbers: true,
	},
});
// 获取vue的侧边栏
function getVueSideBar(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: '开发问题',
			collapsed: false,
			items: [
				{
					text: '虚拟滚动组件',
					link: 'dev/01',
				},
				{
					text: '表格布局组件',
					link: 'dev/02',
				},
				{
					text: '二维码生成',
					link: 'dev/03',
				},
				{
					text: '基于localforage的浏览器存储INDEXEDDB的使用',
					link: 'dev/04',
				},
				{
					text: '关于html2canvas插件的踩坑',
					link: 'dev/05',
				},
				{
					text: 'axios取消请求大有用处',
					link: 'dev/08',
				},
				{
					text: '关于FormAdjust表单自定义组件使用方法.tmp',
					link: 'dev/07',
				},
				{
					text: '微组件-客服中心/插件中心等接入及使用',
					link: 'dev/06',
				},
			],
		},
		{
			text: '框架问题',
			collapsed: false,
			items: [
				{ text: '细节与踩坑', link: 'vue/01' },
				{ text: '基于京东MicroApp的微前端实现', link: 'others/02' },
			],
		},
		{
			text: '其他问题',
			collapsed: false,
			items: [
				{
					text: 'FAQ',
					link: 'others/01',
				},
			],
		},
	];
}
// 获取uniapp的侧边栏
function getUniappSideBar(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: '开发问题',
			collapsed: false,
			items: [
				{ text: 'uniapp中实现海报分享', link: 'dev/01' },
				{ text: 'uniapp中使用图表', link: 'dev/02' },
				{ text: 'uniapp中使用mockjs', link: 'dev/03' },
			],
		},
		{
			text: '框架问题',
			collapsed: false,
			items: [{ text: '细节与踩坑', link: 'uni/01' }],
		},
		{
			text: '其他问题',
			collapsed: false,
			items: [
				{
					text: 'FAQ',
					link: 'others/01',
				},
			],
		},
	];
}
// 获取weapp的侧边栏
function getWeappSideBar(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: '开发问题',
			collapsed: false,
			items: [
				{
					text: '微信小程序开发问题',
					link: '/dev/01',
				},
			],
		},
		{
			text: '框架问题',
			collapsed: false,
			items: [{ text: '细节与踩坑', link: 'weapp/01' }],
		},
		{
			text: '其他问题',
			collapsed: false,
			items: [{ text: 'FAQ', link: 'weapp/01' }],
		},
	];
}
// 获取工具包的侧边栏
function getToolsSideBar(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: 'lonbon-common',
			link: 'npm/lonbon-common',
		},
		{
			text: 'lonbon-map',
			link: 'npm/lonbon-map',
		},
		{
			text: 'lonbon-device',
			link: 'npm/lonbon-device',
		},
	];
}
// 获取nodejs的侧边栏
function getNodeSideBar(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: 'ai智能操作指引',
			link: 'dev/01',
		},
	];
}
// 获取其他的侧边栏
function getOthersSideBar(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: '写作规范',
			link: 'write/01',
		},
		{
			text: '开发规范',
			link: 'dev/01',
		},
	];
}
// 获取调研总结的侧边栏
function getResearchSideBar(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: '调研总结',
			link: '01',
		},
	];
}
//
function getReactSideBar(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: 'react',
			link: 'dev/01',
		},
		{
			text: '其他问题',
			items: [
				{
					text: 'react常用技术栈',
					link: 'others/01',
				},
			],
		},
	];
}
// nextjs的侧边栏
function getNextSideBar(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: 'next入门',
			link: 'dev/01',
		},
	];
}
// 搜索框的配置
function getSearchOptions() {
	return {
		placeholder: '搜索文档',
		translations: {
			button: {
				buttonText: '搜索文档',
				buttonAriaLabel: '搜索文档',
			},
			modal: {
				searchBox: {
					resetButtonTitle: '清除查询条件',
					resetButtonAriaLabel: '清除查询条件',
					cancelButtonText: '取消',
					cancelButtonAriaLabel: '取消',
				},
				startScreen: {
					recentSearchesTitle: '搜索历史',
					noRecentSearchesText: '没有搜索历史',
					saveRecentSearchButtonTitle: '保存至搜索历史',
					removeRecentSearchButtonTitle: '从搜索历史中移除',
					favoriteSearchesTitle: '收藏',
					removeFavoriteSearchButtonTitle: '从收藏中移除',
				},
				errorScreen: {
					titleText: '无法获取结果',
					helpText: '你可能需要检查你的网络连接',
				},
				footer: {
					selectText: '选择',
					navigateText: '切换',
					closeText: '关闭',
					searchByText: '搜索提供者',
				},
				noResultsScreen: {
					noResultsText: '无法找到相关结果',
					suggestedQueryText: '你可以尝试查询',
					reportMissingResultsText: '你认为该查询应该有结果？',
					reportMissingResultsLinkText: '点击反馈',
				},
			},
		},
	};
}
