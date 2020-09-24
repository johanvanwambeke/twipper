<template>
  <div class="comments" >
    <div  v-for="(comment,i) in comments" :key="i" class="comment">
      <div class="author"> 
        {{comment.author}} - {{comment.createdAgo}}
      </div>
      <p>{{comment.text}}</p>      
    </div>
    <div class="addComment">
      <input type="text" v-model="commentText">
      <button @click="addComment">Comment</button>
    </div>
  </div>      
</template>
<script>
export default {
  props:{
    id:Number,
    comments:Array
  },
  data(){
    return{
      commentText:''
    }
  },
  methods:{
    addComment(){
      this.$store.dispatch('addComment',{id:this.id, text:this.commentText})
    },
  }
}
</script>
<style scoped>
.comments{
  margin:8px;
}
.comment{
  background-color: rgb(252, 252, 252);
  margin-bottom: 4px;
}
</style>