<template>
	<div class="input-group mb-3">
		<select class="form-control" id="sel1" v-model="newsCategory">
			<option v-for="list in categoryList" :value="list">{{list}}</option>
		</select>
		<div class="input-group-append">
			<button class="btn btn-dark" type="button" @click="searchNews">Search News</button>
		</div>
	</div>
</template>

<script>
	import { EventBus } from '../main'
	export default {
		data () {
			return {
				newsCategory : "sports",
				categoryList : ["business","entertainment", "general", "health", "science", "sports", "technology"]
			}
		},
		methods : {
			searchNews() {
				EventBus.$emit("searchByCategory", this.newsCategory);
			}
		}
	}
</script>