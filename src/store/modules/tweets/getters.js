export const getters = {
  tweets(state){
    if(state.filterState === 'all')
      return state.tweets
    if(state.filterState === 'mine' && state.tweets != null)
      return state.tweets.filter(x=>x.isAuthor == true)
    if(state.filterState === 'liked' && state.tweets != null)
      return state.tweets.filter(x=>x.likedByMe == true)
  },
  loading: state => state.loading,
  filterState: state => state.filterState
};