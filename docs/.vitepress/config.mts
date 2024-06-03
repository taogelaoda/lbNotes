import { defineConfig, type DefaultTheme } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: 'Lb Notes',
	description: '来邦前端公共文档',
	base: '/resource/notes/',
	themeConfig: {
		algolia: {
			apiKey: '3efa538d282edf27cb9edec74e7d7bd4',
			indexName: 'nbtest-lonbon',
			appId: 'ODSIFFK52F',
			...getSearchOptions()
		},
		// https://vitepress.dev/reference/default-theme-config
		// search: {
		// 	provider: 'local',
		// },
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
					{
						text: '开发规范',
						link: '/others/dev/01',
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
			],
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
	return [
		{
			text: '写作规范',
			link: 'write/01',
		},
		{
			text: '开发规范',
			collapsed: false,
			items: [
				{
					text: '来邦前端开发文档',
					link: 'dev/01',
				},
			],
		},
	];
}

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
