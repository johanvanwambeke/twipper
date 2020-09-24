<template>
  <div class="createTweet" :class="{ redBorder: tweetIsToLong }">
    <input v-model="tweetText" @keyup.enter="addTweet">
    <p v-if="tweetIsToLong">The length of your tweet can not be more then 140 characters</p>
    <p :class="{ redFont: tweetIsToLong }">{{tweetLength}}</p>
    <button :disabled="tweetIsToLong || tweetIsToShort" @click="addTweet">tweet</button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      tweetText:'' 
    }
  },
  computed:{
    tweetLength(){
      return this.tweetText.length
    },
    tweetIsToLong(){
      return this.tweetLength>140
    },
    tweetIsToShort(){
      return this.tweetLength<1
    }
  },
  methods:{
    addTweet(){
      if(!this.tweetIsToLong && !this.tweetIsToShort){
        this.$store.dispatch('addTweet',this.tweetText)
        this.tweetText=''
      }
    }
  }
}
</script>
<style>
  .createTweet{
    display:flex;
    align-items: center;
    justify-content: space-between;
  }
  .redBorder{
    border:solid 1px red;
  }
  .redFont{
    color:red;
  }
</style>