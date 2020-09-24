export const actions ={
	async getTweets({commit}) {
		commit('setLoading', true)
		fetch('/tweets')
		.then(resp => resp.json())
		.then(data => {
				console.log(data)
				commit('setTweets', data)
				commit('setLoading', false)
		})
	},
	async addTweet({dispatch,rootGetters},tweetText){
		fetch('/tweets', {
			method: "POST",
			headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
			body: JSON.stringify({ tweet: { text: tweetText, author:rootGetters.userName } })
		})
		.then(() =>{
			dispatch('getTweets')
		})
	},
	async addComment({dispatch,rootGetters},payload){
		fetch(`/tweets/${payload.id}/comments`, {
			method: "POST",
			headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
			body: JSON.stringify({ comment: { text: payload.text, author:rootGetters.userName } })
		})
		.then(() =>{
			dispatch('getTweets')
		})
	},
	async destroyTweet({dispatch},id){
		fetch(`/tweets/${id}`, {
			method: "DELETE",
			headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
		})
		.then(() =>{
			dispatch('getTweets')
		})
	}
}