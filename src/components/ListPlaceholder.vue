<template>
  <div class="list-placeholder" v-bind:style="style" />
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'list-placeholder',
  computed: {
    ...mapState({
      liftedListInfo: state => state.card.liftedListInfo,
    }),
    style: function() {
      return {
        width: `${this.liftedListInfo.width}px`,
        height: `${this.liftedListInfo.height}px`,
      };
    },
  },
}
</script>

<style scoped>
  .list-placeholder {
    margin-left: 4px;
    margin-right: 4px;
    background-color: #b3b5ba;
    border-radius: 3px;
  }
</style>

