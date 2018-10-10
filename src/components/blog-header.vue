<template>
	<header>
		<figure class="logo">
			<img src="@/assets/images/logo.png">
		</figure>
		<nav class="global-nav">
			<ul>
				<li :class="{ active : currentPath === '/' }"><router-link to="/">Home</router-link></li>
				<li :class="{ active : currentPath === '/hot' }"><router-link to="/hot">Hot</router-link></li>
				<li :class="{ active : currentPath === '/about' }"><router-link to="/about">About</router-link></li>
				<li><i class="el-icon-search" @click="search($event)"></i></li>
			</ul>
		</nav>
	</header>
</template>

<script>
export default {
	name: 'blogHeader',
	props: ['backend'],
	data() {
		return {
			isLogin: false  //todo
		}
	},
	computed: {
		currentPath() {
		  	return this.$route.path
		}
	},
	methods: {
		login() {
			// todo
		},
		search(event) {
			//todo
			console.log(event.target)
		}
	}
}
</script>