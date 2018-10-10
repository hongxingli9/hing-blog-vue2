<template>
	<div class="post-hot">
		<div class="hotPost-card" v-for="n in 7" :key="n">
			hot post {{ n }}
		</div>
	</div>
</template>

<script>
export default {
	name: 'postHot',
	data() {
		return {}
	},
	methods: {

	}
}
</script>