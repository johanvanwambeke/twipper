<template>
  <div class="tweet" >
    <div class="author"> 
      {{tweet.author}} - {{tweet.createdAgo}}
    </div>
    <p>{{tweet.text}}</p>    
    <button @click="toggleTweet">{{tweet.likedByMe?'dislike':'like'}}</button>
    <button v-if="tweet.isAuthor" @click="destroyTweet">destroy</button>
    <div class="commentLabel" @click="showComments = !showComments">
      comments ({{tweet.comments.length}}) 
    </div>
    <comments v-if="showComments" :id="tweet.id" :comments="tweet.comments" />
  </div>
</template>
<script>
import Comments from './Comments'
export default {
  name: 'tweet',
  props:{
    tweet:Object
  },
  components:{Comments},
  data(){
    return{
      showComments:false
    }
  },
  methods:{
    destroyTweet(){
      if(confirm('Are you sure?'))
        this.$store.dispatch('destroyTweet',this.tweet.id)
    },
    toggleTweet(){
      if(this.tweet.likedByMe)
        this.$store.dispatch('dislikeTweet',this.tweet.id)
      else
        this.$store.dispatch('likeTweet',this.tweet.id)
    },
  },
}
</script>
<style>
.tweet{
  padding:8px;
  margin-bottom: 8px;
  background-color: rgb(247, 247, 247);
  border-radius: 8px;
  border: 1px solid gray;
}
.commentLabel{
  cursor: pointer;
  font-weight:600;
  margin-top:4px;
}
.author{
  font-size: 12px;
  color:rgb(129, 129, 129);
}
</style>