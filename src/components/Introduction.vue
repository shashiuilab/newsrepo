<template>
	<div>
	 <h1 class="my-4">Just News</h1>
	 <h2>{{greetMsg}} !! Welcome to Headlines</h2>
	 
	 <app-searchnews></app-searchnews>
     </div>
</template>

<script>
	import SearchNews from './SearchNews.vue'
	export default {
		computed : {
			greetMsg() {
				 return this.$store.getters.getHours;
			}
		},
		components : {
			'app-searchnews' : SearchNews
		}
	}
</script>