<template>
	<div class="row">
		<div class="col-lg-12">
		  <h2 class="my-4">Latest:</h2>
		</div>
		<div class="col-lg-3 col-sm-6 text-center mb-4" v-for="news in newsData">
		  <img class="rounded-circle img-fluid d-block mx-auto thumbNailSize" :src="news.urlToImage" alt="">
		  <h4><a :href="news.url" target="_blank">{{news.title}}</a></h4>
		  <small>{{news.description}}</small>
		  
		</div>
	</div>
</template>

<script>
import { EventBus } from '../main.js'
	export default {
		data () {
			return {
				newsData : [],
				category : ''
			}
		},
		computed : {
			getNews() {
				this.$http.get("https://newsapi.org/v2/top-headlines?country=gb&category="+this.category+"&apiKey=8ec6b651156c4e1796bbc249b999a5e4")
				.then(response=> {
					return response.body.articles
				}).then(data=>{
					this.$store.state.newsFeed = data;
					this.newsData = this.$store.state.newsFeed;
					console.log(this.newsData);
				});
			}
		},
		created () {
			setInterval(this.getNews, 200000);
		},
		mounted () {
			EventBus.$on("searchByCategory", data => {
				this.category = data;
				this.getNews;
			});
		}
	}
</script>
<style scoped>
	.thumbNailSize {
	    width: 80%;
		height: 40%;
	}
</style>