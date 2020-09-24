import Vuex from 'vuex'
import Vue from 'vue'

import tweets from './modules/tweets/index';
import user from './modules/user/index';

Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
		tweets,
		user
	},		
});