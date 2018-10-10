<template>
	<section class="post-section">
		<div class="container">
			<el-row :gutter="30">
				<el-col :span="16" class="main">
					<el-row :gutter="20">
						<post-item v-for="n in 9" class="post-item" :key="n">hot post item {{ n }}</post-item>
					</el-row>
				</el-col>
				<el-col :span="8" class="aside">
					<post-topics></post-topics>
				</el-col>
			</el-row>
		</div>
	</section>
</template>

<script>
import postItem from '@/components/post-item.vue'
import postTopics from '@/components/post-topics.vue'

export default {
	name: 'hotPosts',
	props: [],
	components: {
		postItem,
		postTopics
	},
	data() {
		return {

		}
	},
	methods: {

	}
}
</script>