// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme';
import './custom.css';
import Comments from './components/comments.vue';
// import type { Theme } from 'vitepress';
import Layout from './Layout.vue';
export default {
	extends: DefaultTheme,
	enhanceApp({ app }) {
		// 注册自定义全局组件
		app.component('Comments', Comments); // gittalk评论组件
	},
	Layout: Layout,
};
