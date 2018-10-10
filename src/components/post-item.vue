<template>
	<el-col :span="24">
		<div class="post-item-wrap">
			<span class="post-source">分类：<router-link :to="'/category/' + item.category" class="category-link">{{ item.category_name }}</router-link></span>
			<span class="post-time">{{ item.update_date }}</span>
			<div class="title-link-wrap">
				<router-link :to="'/article/' + item._id" class="title-link">{{ item.title }}</router-link>
			</div>
			<div class="item-content-wrap">
				<div class="post-item-content">{{ item.content }}</div>
			</div>
		</div>
	</el-col>
</template>

<script>
export default {
	name: 'postItem',
	props: {
		item: Object
	},
	data() {
		return {

		}
	},
	methods: {

	}
}
</script>