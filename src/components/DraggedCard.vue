<template>
  <div v-if="liftInfo" ref="card" id="dragged-card" v-bind:style="style">
    <span>{{ liftInfo.card.text }}</span>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'dragged-card',
  computed: {
    ...mapState({
      liftInfo: state => state.card.liftedCardInfo,
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
  #dragged-card {
    position: absolute;

    margin-bottom: 8px;
    padding: 8px;
    background-color: white;
    border-radius: 3px;

    box-shadow: 0 1px 0 rgba(9,30,66,.25);

    white-space: pre-wrap;
    word-wrap: break-word;
    overflow-x: hidden;

    cursor: grabbing;

    transform: rotate(5deg);
  }
</style>

