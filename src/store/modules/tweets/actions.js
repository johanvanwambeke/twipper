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
	async addTweet({commit,rootGetters},tweetText){
		fetch('/tweets', {
			method: "POST",
			headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
			body: JSON.stringify({ tweet: { text: tweetText, author:rootGetters.userName } })
		})
		.then(result =>{
			return result.json()
		})
		.then(data =>{
			commit('addTweet',data)
		})
	},
	async destroyTweet({dispatch},id){
		fetch(`/tweets/${id}`, {
			method: "DELETE",
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
	async likeTweet({commit},id){
		fetch(`/tweets/${id}/like`, {
			method: "PUT"
		})
		commit('setLike',id)
	},
	async dislikeTweet({commit},id){
		fetch(`/tweets/${id}/dislike`, {
			method: "PUT"
		})
		commit('setLike',id)
	}
}