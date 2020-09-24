<template>
  <div>

    <div class="comments" >
          <div  v-for="(comment,i) in comments" :key="i" class="comment">
            {{comment.author}}
            {{comment.createdAgo}}
            {{comment.text}}
          </div>
          <div class="addComment">
            <input type="text" v-model="commentText">
            <button @click="addComment">Comment</button>
          </div>
        </div>      
    </div>  
</template>
<script>
export default {
  props:['id','comments'],
  data(){
    return{
      commentText:''
    }
  },
  methods:{
    addComment(){
      this.$store.dispatch('addComment',{id:this.id,text:this.commentText})
    },
  }
}
</script>
<style scoped>
</style>