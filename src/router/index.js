import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
// import postIndex from '@/pages/post-index.vue'

Vue.use(Router)

export default new Router({
	// mode: 'history',
	base: '/',
	component: App,
  	routes: [
	    {
		    path: '/',
	        name: 'postIndex',
	        component: () => import(/* webpackChunkName: "postIndex" */ '@/pages/post-index.vue')
	    },
    	{
    		path: '/hot',
    		name: 'hotPosts',
    		component: () => import(/* webpackChunkName: "hotPosts" */ '@/pages/hot-posts.vue')
    	}
  	]
})
