<template>
  <div>
    <div class="tweet" >
      {{tweet.author}}
      {{tweet.createdAgo}}
      {{tweet.text}}
    </div>
    <div>
      <button>like</button>
      <button>dislike</button>
      <button v-if="canDelete" @click="destroyTweet">destroy</button>
      <div class="commentLabel" @click="showComments = !showComments">
      comments ({{tweet.comments.length}}) 
      </div>
      <comments v-if="showComments" :id="tweet.id" :comments="tweet.comments" />
    </div>
  </div>
</template>
<script>
import Comments from './Comments'
export default {
  name: 'tweet',
  props:['tweet'],
  components:{Comments},
  data(){
    return{
      showComments:false,
    }
  },
  methods:{
    destroyTweet(){
      this.$store.dispatch('destroyTweet',this.tweet.id)
    }
  },
  computed:{
    canDelete(){
      return this.$store.getters.userName == this.tweet.author
    }
  }
}
</script>
<style scoped>

.commentLabel{
  cursor: pointer;
}
</style>