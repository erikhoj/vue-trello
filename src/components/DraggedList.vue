<template>
  <div v-if="liftInfo" ref="card" id="dragged-list" v-bind:style="style">
    <card-list v-bind:list="liftInfo.list" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import CardList from './CardList';

export default {
  name: 'dragged-list',
  components: {
    CardList,
  },
  computed: {
    ...mapState({
      liftInfo: state => state.card.liftedListInfo,
      mousePosition: state => state.card.mousePosition,
    }),
    style: function() {
      return {
        top: `${this.mousePosition.y - this.liftInfo.grabY}px`,
        left: `${this.mousePosition.x - this.liftInfo.grabX}px`,
        width: `${this.liftInfo.width}px`,
        height: `${this.liftInfo.height}px`,
      };
    },
  },
}
</script>

<style scoped>
  #dragged-list {
    position: absolute;

    transform: rotate(5deg);
  }
</style>
