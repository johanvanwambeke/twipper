<template>
  <div id="app">
    <div class="container">
      <user/>
      <create-tweet/>
      <filter-tweets/>
      <tweet-list/>
    </div>
  </div>
</template>

<script>
import { configureLiveApi } from 'dm-fetch'

import User from './components/User.vue'
import CreateTweet from './components/CreateTweet.vue'
import FilterTweets from './components/Filter.vue'
import TweetList from './components/TweetList.vue'

configureLiveApi("https://dm-backend.herokuapp.com/api/dm/2", "72593227-c460-43e9-9adf-b50fc34a6382", false)

export default {
  name: 'App',
  components: {
    User,
    CreateTweet,
    TweetList,
    FilterTweets
  },
  created(){
    this.$store.dispatch('getTweets')
  }
}
</script>
<style scoped>
#app{
  display: flex;
  justify-content: center;
}
.container{
  max-width: 450px;
}
</style>
