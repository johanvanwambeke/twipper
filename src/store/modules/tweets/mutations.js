export const mutations ={
	setTweets(state, payload) {
		state.tweets = payload
	},
	setLoading(state,payload){
		state.loading = payload
	}
}