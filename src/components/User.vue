<template>
  <div class="user">
    User: {{userName}}
  </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  computed:{
    ...mapGetters(['userName'])
  },
}
</script>