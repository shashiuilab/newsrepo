<template>
    <div class="container">
    	<app-header></app-header>
    	<app-introduction></app-introduction>
        <div class="row">
            <div class="col-xs-12 col-sm-offset-2 col-md-offset-2">
                <app-news></app-news>
            </div>
        </div>
    </div>
</template>

<script>
	import Header from './components/Header.vue'
	import Introduction from './components/Introduction.vue'
	import News from './components/News.vue'
    export default {
    	components : {
    		appHeader: Header,
    		appIntroduction : Introduction,
    		appNews : News
    	}
    }
</script>

<style>
</style>
