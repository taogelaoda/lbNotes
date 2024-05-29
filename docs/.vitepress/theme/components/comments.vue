<template>
    <div id="gitalk"></div>
</template>
<script setup>
import 'gitalk/dist/gitalk.css';
import Gitalk from 'gitalk';
import { onMounted } from 'vue';
onMounted(() => {
	if (typeof window !== undefined) {
		var s_div = document.createElement('div'); // 创建节点
		s_div.setAttribute('id', 'gitalk-page-container'); // 设置id
		document.querySelector('#gitalk').appendChild(s_div); // querySelector的节点可自己根据自己想加载的地方设置
		var gitalk = new Gitalk({
			//（上面的都不要改，从这里开始填写信息）
			clientID: 'Ov23linRVtNBqf4PKfUx', // 填写之前创建OAuth App保存的clientID
			clientSecret: '5623d8f91bf85ed23a13e119b4d810e36d2cd989', // 填写之前创建OAuth App保存的clientSecret
			repo: 'lbNotes', // 填写你用于存放评论的仓库名，注意需要仓库打开了issues功能（一般默认打开）
			owner: 'taogelaoda', // 填写你的github用户名
			admin: ['taogelaoda'], // 填写github管理者列表
			id: decodeURI(location.pathname), // 不变，Ensure uniqueness and length less than 50
			distractionFreeMode: false, // 不变，Facebook-like distraction free mode
		});
		gitalk.render('gitalk-page-container');
	}
});
</script>

