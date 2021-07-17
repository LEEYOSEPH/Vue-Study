<template>
  <div>
    <p>{{item.title}}</p>
    <div>
      {{item.content}}
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed:{
    ...mapGetters({
      item: 'fetchCommentItem'
    })
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM',itemId);
  }
};
</script>

<style></style>
