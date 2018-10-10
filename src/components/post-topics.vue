<template>
	<div class="post-topics">
		<div class="topic-card" v-for="n in 8" :key="n">
			test {{ n }}
		</div>
	</div>
</template>

<script>
export default {
	name: 'postTopics',
	data() {
		return {}
	},
	methods: {

	}
}
</script>