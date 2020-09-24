<template>
<div class="container">
  <div v-if="loading" class="loading">
    <h1>Loading...</h1> 
  </div>
  <div v-for="(tweet,i) in tweets" :key="i" class="tweetlist">
    <tweet :tweet="tweet" />
  </div>
</div>
</template>

<script>
import {mapGetters} from 'vuex';
import Tweet from './Tweet'

export default {
  name: 'tweet-list',
  components:{Tweet},
  computed: {
    ...mapGetters(['tweets','loading']),
  },
  
}
</script>

