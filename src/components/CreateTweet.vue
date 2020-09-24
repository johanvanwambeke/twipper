<template>
  <div class="createTweet">
    <textarea rows="4" cols="50" v-model="tweetText"></textarea>
    <p>{{tweetLength}}</p>
    <button @click="addTweet">tweet</button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      tweetText:`Johan's tweet ${Math.round(Math.random(0,1000)*1000)}` 
    }
  },
  computed:{
    tweetLength(){
      return this.tweetText.length
    }
  },
  methods:{
    addTweet(){
      this.$store.dispatch('addTweet',this.tweetText)
    }
  }
}
</script>
<style>
  .createTweet{
    display:flex;
    align-items: center;
    align-content: center;
  }
</style>