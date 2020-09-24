export const mutations ={
	setTweets(state, payload) {
		state.tweets = payload
	},
	addTweet(state, payload){
		state.tweets.unshift(payload)
	},
	setLoading(state,payload){
		state.loading = payload
	},
	setFilterState(state,payload){
		state.filterState = payload
	},
	setLike(state,payload){
		let tweet = state.tweets.filter(x=>x.id === payload)[0]
		if(tweet!=null)
			tweet.likedByMe = !tweet.likedByMe
	}
}