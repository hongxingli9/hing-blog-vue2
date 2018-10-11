<template>
	<div class="post-topics">
		<div class="topic-card" v-for="(topic, index) in topicList" :key="index">
			<router-link :to="'/category/' + topic._id">
				<i class="el-icon-caret-right"></i>
				<h3>{{ topic.cate_name }}</h3>
				<p>{{ topic.cate_num }} 篇文章</p>
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'postTopics',
	data() {
		return {
			topicList: [
	            {
	                "_id": "58481a4fd4352863efb5542d",
	                "cate_name": "React",
	                "cate_order": "88",
	                "creat_date": "2016-12-07 22:12:56",
	                "is_delete": 0,
	                "timestamp": 1481120335,
	                "__v": 0,
	                "cate_num": 3
	            },
	            {
	                "_id": "58481a49d4352863efb5542c",
	                "cate_name": "Vue",
	                "cate_order": "77",
	                "creat_date": "2016-12-07 22:12:22",
	                "is_delete": 0,
	                "timestamp": 1481120329,
	                "__v": 0,
	                "cate_num": 34
	            },
	            {
	                "_id": "58481a42d4352863efb5542b",
	                "cate_name": "ES6",
	                "cate_order": "66",
	                "creat_date": "2016-12-07 22:12:10",
	                "is_delete": 0,
	                "timestamp": 1481120322,
	                "__v": 0,
	                "cate_num": 5
	            },
	            {
	                "_id": "58482153d4352863efb5545c",
	                "cate_name": "NodeJS",
	                "cate_order": "60",
	                "creat_date": "2016-12-07 22:12:56",
	                "is_delete": 0,
	                "timestamp": 1481122131,
	                "__v": 0,
	                "cate_num": 3
	            },
	            {
	                "_id": "58481a3bd4352863efb5542a",
	                "cate_name": "JavaScript",
	                "cate_order": "55",
	                "creat_date": "2016-12-07 22:12:41",
	                "is_delete": 0,
	                "timestamp": 1481120315,
	                "__v": 0,
	                "cate_num": 18
	            },
	            {
	                "_id": "58481a35d4352863efb55429",
	                "cate_name": "HTML+CSS",
	                "cate_order": "44",
	                "creat_date": "2016-12-07 22:12:89",
	                "is_delete": 0,
	                "timestamp": 1481120309,
	                "__v": 0,
	                "cate_num": 7
	            },
	            {
	                "_id": "58481a2ed4352863efb55428",
	                "cate_name": "Webpack",
	                "cate_order": "33",
	                "creat_date": "2016-12-07 22:12:42",
	                "is_delete": 0,
	                "timestamp": 1481120302,
	                "__v": 0,
	                "cate_num": 8
	            },
	            {
	                "_id": "58481e9ed4352863efb5544b",
	                "cate_name": "前端",
	                "cate_order": "27",
	                "creat_date": "2016-12-07 22:12:14",
	                "is_delete": 0,
	                "timestamp": 1481121438,
	                "__v": 0,
	                "cate_num": 14
	            },
	            {
	                "_id": "58481a22d4352863efb55427",
	                "cate_name": "生活",
	                "cate_order": "22",
	                "creat_date": "2016-12-07 22:12:22",
	                "is_delete": 0,
	                "timestamp": 1481120290,
	                "__v": 0
	            },
	            {
	                "_id": "58481a19d4352863efb55426",
	                "cate_name": "其他",
	                "cate_order": "11",
	                "creat_date": "2016-12-07 22:12:93",
	                "is_delete": 0,
	                "timestamp": 1481120281,
	                "__v": 0,
	                "cate_num": 6
	            }
	        ]
		}
	},
	methods: {

	}
}
</script>