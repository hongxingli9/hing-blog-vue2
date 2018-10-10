<template>
	<section class="post-section">
		<div class="container">
			<el-row :gutter="30">
				<el-col :span="16" class="main">
					<el-row :gutter="20">
						<post-item 
							v-for="(item, index) in list" 
							class="post-item" 
							:key="index"
							:item="item">		
						</post-item>
					</el-row>
				</el-col>
				<el-col :span="8" class="aside">
					<post-topics></post-topics>
					<post-hot></post-hot>
				</el-col>
			</el-row>
		</div>
	</section>
</template>

<script>
import postItem from '@/components/post-item.vue'
import postTopics from '@/components/post-topics.vue'
import postHot from '@/components/post-hot.vue'

export default {
	name: 'postIndex',
	props: [],
	components: {
		postItem,
		postTopics,
		postHot
	},
	data() {
		return {
			list: [
	            {
	                "likes": [],
	                "_id": "5badeeb12f52003e4d38c66b",
	                "title": "router-view 组件的 key 和 Vue-Router 的 beforeRouteUpdate",
	                "category": "58481a49d4352863efb5542c",
	                "category_name": "Vue",
	                "content": "#### 1. 不设置 router-view 的 key 属性\n\n由于 Vue 会复用相同组件, 即 `/page/1` => `/page/2` 或者 `/page?id=1` => `/page?id=2` 这类链接跳转时, 将不在执行`created, mounted`之类的钩子, 这时候你需要在路由组件中, 添加`beforeRouteUpdate`钩子来执行相关方法拉去数据\n\n相关钩子加载顺序为: beforeRouteUpdate\n\n#### 2. 设置 router-view 的 key 属性值为 $route.path\n\n从`/page/1` => `/page/2`, 由于这两个路由的`$route.path`并不一样, 所以组件被强制不复用, 相关钩子加载顺序为:\nbeforeRouteUpdate => created => mounted\n\n从`/page?id=1` => `/page?id=2`, 由于这两个路由的`$route.path`一样, 所以和没设置 key 属性一样, 会复用组件, 相关钩子加载顺序为:\nbeforeRouteUpdate\n\n#...",
	                "visit": 62,
	                "like": 0,
	                "comment_count": 0,
	                "creat_date": "2018-09-28 17:04:49",
	                "update_date": "2018-09-28 17:04:49",
	                "is_delete": 0,
	                "timestamp": 1538125489,
	                "like_status": false
	            },
	            {
	                "likes": [],
	                "_id": "584820f6d4352863efb55459",
	                "title": "Github 前端收藏夹",
	                "category": "58481e9ed4352863efb5544b",
	                "category_name": "前端",
	                "content": "目录\n1. [React 相关](#react)\n2. [Vue 相关](#vue)\n\t- [Vue 组件库](#vue-components)\n\t- [Vue 表单](#vue-form)\n\t- [Vue 操作](#vue-handle)\n\t- [Vue 图片](#vue-image)\n\t- [Vue 通知](#vue-notice)\n\t- [Vue 其他](#vue-other)\n3. [小程序相关](#weapp)\n4. [前端 UI 框架](#ui)\n5. [CSS 相关](#css)\n6. [单页](#spa)\n7. [表单相关](#form)\n8. [弹出相关](#dialog)\n9. [开发工具](#devtools)\n10. [移动端相关](#mobile)\n11. [鼠标相关](#mouse)\n12. [数据处理](#data)\n13. [图片相关](#image)\n14. [动画相关](#animation)\n15. [项目资料](#information)\n16. [其他相关](#other)\n\n# react\nReact 相关\n===实例===\nhttps://...",
	                "visit": 5048,
	                "like": 19,
	                "comment_count": 18,
	                "creat_date": "2016-12-07 22:12:38",
	                "is_delete": 0,
	                "timestamp": 1481122038,
	                "update_date": "2018-09-28 11:49:05",
	                "like_status": false
	            },
	            {
	                "likes": [],
	                "_id": "5b18d19f2f52003e4d38c639",
	                "title": "用一个简单的函数实现 Optional Chaining",
	                "category": "58481e9ed4352863efb5544b",
	                "category_name": "前端",
	                "content": "`Optional Chaining`是个好东西, 可惜现在还处于`Stage 1`阶段, 虽然 babel 已经实现了该功能, 但是编辑器, eslint 之类还是不支持, 想用还是遥遥无期\n\n`Optional Chaining`的作用, 主要是让开发者告别一堆的`&&`:\n\n```javascript\nconst obj = {\n    abc: {\n        def: {\n            ghi: '123'\n        }\n    }\n}\n```\n上面的对象, 如果想取最后的`123`, 在不确定前面 abc, def 是否为 null, undefined 的情况下, 我们就得这么写:\n\n```javascript\nconst str = obj && obj.abc && obj.abc.def && obj.abc.def.ghi\n```\n天长地久的一串, 但是有`Optional Chaining`之后, 你只需要这么写:\n\n```javascript\nconst str = obj?.abc?.def?.ghi\n```\n是不是简单了很多...\n\n既...",
	                "visit": 675,
	                "like": 4,
	                "comment_count": 4,
	                "creat_date": "2018-06-07 14:33:03",
	                "update_date": "2018-09-14 00:01:26",
	                "is_delete": 0,
	                "timestamp": 1528353183,
	                "like_status": false
	            },
	            {
	                "likes": [],
	                "_id": "5b84fa5c2f52003e4d38c657",
	                "title": "如果在 beforeRouteLeave 钩子中跳转到指定链接?",
	                "category": "58481a49d4352863efb5542c",
	                "category_name": "Vue",
	                "content": "有这么一个需求, 需要在用户离开时, 弹窗让用户选择[是]/[否]按钮来决定页面跳转, 如果选[是]则跳转到一个页面, 选否则留在当前页面\n\n第一想法肯定是在`beforeRouteLeave`做相关逻辑\n\n```javascript\nbeforeRouteLeave(to, from, next) {\n    const answer = window.confirm('...')\n    if (answer) {\n        next('/some/path')\n    } else {\n        next(false)\n    }\n}\n```\n\n结果出现了死循环, 因为在调用`next('/some/path')`时, 又触发了`beforeRouteLeave`, 从而又执行了`next('/some/path')`, 所以出现了死循环\n\n处理方法也很简单:\n\n```javascript\nbeforeRouteLeave(to, from, next) {\n    if (to.fullPath === '/some/path') {\n        return ...",
	                "visit": 209,
	                "like": 1,
	                "comment_count": 4,
	                "creat_date": "2018-08-28 15:31:40",
	                "update_date": "2018-08-28 15:31:40",
	                "is_delete": 0,
	                "timestamp": 1535441500,
	                "like_status": false
	            },
	            {
	                "likes": [],
	                "_id": "5b6ba45d2f52003e4d38c64f",
	                "title": "vue 中 watch 监控不到 vuex 的变化?",
	                "category": "58481a49d4352863efb5542c",
	                "category_name": "Vue",
	                "content": "假设在根组件用 dispatch 触发一个异步的 Action\n\n```javascript\nasync created() {\n    await this.$store.dispatch(`base/info/get`)\n},\n```\n\n在路由组件里 watch 数据\n\n```javascript\ncomputed: {\n    ...mapGetters({\n        $$info: 'base/info/get'\n    })\n},\nwatch: {\n    $$info(val) {\n        console.log(val)\n    }\n}\n```\n刷新页面, 这时候会出现有时候能触发 watch, 有时候又不触发, 这到底是什么原因呢?\n\n看 vue 的源代码:\nhttps://github.com/vuejs/vue/blob/dev/src/core/instance/state.js#L48-L62\n\n```javascript\nexport function initState (vm: Component) {\n  vm._watchers = []...",
	                "visit": 451,
	                "like": 1,
	                "comment_count": 0,
	                "creat_date": "2018-08-09 10:18:05",
	                "update_date": "2018-08-09 10:18:05",
	                "is_delete": 0,
	                "timestamp": 1533781085,
	                "like_status": false
	            },
	            {
	                "likes": [],
	                "_id": "5b0f9f522fad053ed0369ea2",
	                "title": "webpack4 + 最新的各种 loader 一些常见的问题归档",
	                "category": "58481a2ed4352863efb55428",
	                "category_name": "Webpack",
	                "content": "###Q1: display: inline-block 布局时, 间距消失了\n\nA1: 在 vue-loader 15版本之前, 是不会删除元素之间空格的(至少会保留1个空格), 但是在 vue-loader 15之后, 如果你不小心这么设置了:\n```javascript\n{\n    test: /\\.vue$/,\n    loader: 'vue-loader',\n    options: {\n        compilerOptions: {\n            preserveWhitespace: false\n        }\n    }\n}\n```\n那么元素之间的空格就不保留了, 如果你需要保留一个空格, 请将`preserveWhitespace`设置成`true`, 或者干脆删除\n\n###Q2: ccs 压缩后, z-index 被重写\n\nA2: webpack4 已经不支持用`extract-text-webpack-plugin`来优化 css, 需要改成`optimize-css-assets-webpack-plugin`和`mini-css-extr...",
	                "visit": 688,
	                "like": 3,
	                "comment_count": 1,
	                "creat_date": "2018-05-31 15:08:02",
	                "update_date": "2018-05-31 15:08:02",
	                "is_delete": 0,
	                "timestamp": 1527750482,
	                "like_status": false
	            },
	            {
	                "likes": [],
	                "_id": "5b053d142fad053ed0369e99",
	                "title": "最后说 Vue2 SSR 的 Cookies 问题",
	                "category": "58481a49d4352863efb5542c",
	                "category_name": "Vue",
	                "content": "本来想前面写点什么的, 还是算了, 直接说思路吧.\n\n从 Vue2.3 版本后, SSR 的 cookies, 就变成一个无比麻烦的问题, 具体请访问官网文档: https://ssr.vuejs.org/zh/api.html#runinnewcontext\n\n之前也说不少的思路, 可是都觉得不怎么好用, 虽然都能解决问题, 今天再说一种思路\n\n因为 Vue2.3 以后, bundle 代码将与服务器进程在同一个 global 上下文中运行, 所以不能再将 cookies 丢到 global 给 api 使用, 否则就会出现 cookies 污染\n\nVue2.3 以后, 我们需要为每个请求创建一个新的根 Vue 实例, 同样的, router、store 也需要, 所以, 我们的思路也在此, 将封装后的 api 注入到这 3 个实例当中去, 保证每个请求的 api 都是独立, 那么就剩一个问题, 注入到哪个实例里面去!?\n\napi 请求用到最多的两个地方就是: 组件和 vuex 的 actions 里, 这两个地方都有 store 的影子, 所以, 注入到 store 中, 毫无疑问...",
	                "visit": 928,
	                "like": 6,
	                "comment_count": 1,
	                "creat_date": "2018-05-23 18:06:12",
	                "update_date": "2018-05-23 18:06:12",
	                "is_delete": 0,
	                "timestamp": 1527069972,
	                "like_status": false
	            },
	            {
	                "likes": [],
	                "_id": "5ac442c02c5d960eb4d7629e",
	                "title": "小程序版终于通过审核了...",
	                "category": "58481a19d4352863efb55426",
	                "category_name": "其他",
	                "content": "github仓库:\nhttps://github.com/lincenying/wepy-mmf-blog\n欢迎加星讨论\n\n用的是`wepy`框架, 页面不多, 只有 2 个列表页, 1 个详情页, 1 个介绍页,\n功能也只有点赞, 加不了评论, 有评论功能就通不过审核 \n\n![](https://ww1.sinaimg.cn/large/005uQRNCgy1fq0g7ni8ijj30by0byq53.jpg)\n\n...",
	                "visit": 821,
	                "like": 10,
	                "comment_count": 1,
	                "creat_date": "2018-04-04 11:13:04",
	                "update_date": "2018-04-04 11:13:04",
	                "is_delete": 0,
	                "timestamp": 1522811584,
	                "like_status": false
	            },
	            {
	                "likes": [],
	                "_id": "596cbb2d436eb550a5423c30",
	                "title": "再说 Vue SSR 的 Cookies 问题",
	                "category": "58481a49d4352863efb5542c",
	                "category_name": "Vue",
	                "content": "一个网站一旦涉及到多用户, 就很难从 Cookies 中逃脱, Vue SSR 的 cookies 也真算是遇到的一个不小的问题, 从开始玩 SSR 开始到现在, 一共想出了3种方案, 从最早的把 Cookies 注入到 state 中, 到把 Cookies 注入到 global, 到现在的将 Cookies 注入到组件的 asyncData 方法.\n\n随着 Vue 的升级, 第一种方案已经不再适用, 第二种也有不少的限制, 于是想到第三种方案, 下来就说说具体实现的方法:\n\n### 第一种方案\n第一种方案已经不再适用, 这里不再细说\n\n### 第二种方案\n思路: 将 cookies 注入到 ssr 的 context里, 然后在请求 api 时读取, 再追加到 axios 的header 里\n\n1, 首先在 server.js 里将 cookies 加到 context里\n\n```javascript\nconst context = {\n    title: 'M.M.F 小屋',\n    description: 'M.M.F 小屋',\n    url: req.url,\n   ...",
	                "visit": 3615,
	                "like": 13,
	                "comment_count": 10,
	                "creat_date": "2017-07-17 21:27:09",
	                "update_date": "2018-01-15 16:19:04",
	                "is_delete": 0,
	                "timestamp": 1500298029,
	                "like_status": false
	            },
	            {
	                "likes": [],
	                "_id": "5a4c9579c1cae068a4cf61f9",
	                "title": "Vue2 JSX 语法几个实用的 babel 插件",
	                "category": "58481a49d4352863efb5542c",
	                "category_name": "Vue",
	                "content": "### 1. v-model\n\n在 jsx 中支持 v-model 指令\n\ngithub: https://github.com/nickmessing/babel-plugin-jsx-v-model\n```bash\nnpm i babel-plugin-jsx-v-model -D\n# or\nyarn add babel-plugin-jsx-v-model --dev\n```\n.babelrc:\n```\n{\n  \"presets\": [\"es2015\"],\n  \"plugins\": [\"jsx-v-model\", \"transform-vue-jsx\"]\n}\n```\n```\nVue.component('hello-world', {\n  data: () => ({\n    text: 'Hello World!'\n  }),\n  render () {\n    return (\n      <div>\n        <input type=\"text\" v-model={this.text} />\n        {this.text}\n      </div>\n    )...",
	                "visit": 1170,
	                "like": 6,
	                "comment_count": 9,
	                "creat_date": "2018-01-03 16:34:01",
	                "update_date": "2018-01-03 16:34:01",
	                "is_delete": 0,
	                "timestamp": 1514968441,
	                "like_status": false
	            }
        	]
		}
	},
	methods: {

	}
}
</script>