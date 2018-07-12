import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import News from './components/News.vue'
Vue.use(Vuex);
Vue.use(VueResource);
export const store = new Vuex.Store({
	state : {
		hours : '',
		newsFeed : [],
		category : 'Football'
	},
	getters : {
		getHours : state=> {
			state.hours = new Date().getHours();
			if (state.hours < 12)
			{
				return 'Good Morning';
			}
			else if (state.hours >= 12 && state.hours <= 17)
			{
				return 'Good Afternoon';
			}
			else if (state.hours >= 17 && state.hours <= 24)
				return 'Good Evening';
			}
		}
	
});