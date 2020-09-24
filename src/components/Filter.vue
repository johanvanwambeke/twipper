<template>
  <div class="filter">
    All
    <input type="radio" id="all" value="all" v-model="filterState" >
    Mine
    <input type="radio" id="mine" value="mine" v-model="filterState">
    Liked
    <input type="radio" id="liked"  value="liked" v-model="filterState">
  </div>
</template>
<script>
export default {
  computed:{
    filterState:{
      get() {
        return this.$store.getters.filterState
      },
      set(newValue) {
        this.$store.commit('setFilterState',newValue)
      }
    }
  }
}
</script>
<style scoped>
.filter{
  margin-bottom:8px;
}
</style>