<template>
  <div id="app">
    <user/>
    <create-tweet/>
    <tweet-list/>
  </div>
</template>

<script>
import { configureLiveApi } from 'dm-fetch'

import User from './components/User.vue'
import CreateTweet from './components/CreateTweet.vue'
import TweetList from './components/TweetList.vue'

configureLiveApi("https://dm-backend.herokuapp.com/api/dm/2", "72593227-c460-43e9-9adf-b50fc34a6382", false)

export default {
  name: 'App',
  components: {
    User,
    CreateTweet,
    TweetList
  },
  created(){
    this.$store.dispatch('getTweets')
  }
}
</script>

