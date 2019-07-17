<template>
  <div class="card-placeholder" v-bind:style="style" />
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'card-placeholder',
  computed: {
    ...mapState({
      liftedCardInfo: state => state.card.liftedCardInfo,
    }),
    style: function() {
      return {
        width: `${this.liftedCardInfo.width}px`,
        height: `${this.liftedCardInfo.height}px`,
      };
    },
  },
}
</script>

<style scoped>
  .card-placeholder {
    margin-bottom: 8px;
    padding: 8px;
    background-color: #b3b5ba;
    border-radius: 3px;
  }
</style>

