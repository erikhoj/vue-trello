<template>
  <div draggable="true" ref="card" class="card-list-card">
    <span>{{ card.text }}</span>
  </div>
</template>

<script>
import { LIFT_CARD } from '../store/mutation-types';

export default {
  name: 'card-list-card',
  props: {
    card: {
      text: String,
      id: Number,
    },
  },
  mounted() {
    this.$refs.card.addEventListener('dragstart', (event) => {
      const liftInfo = {
        width: this.$refs.card.offsetWidth,
        height: this.$refs.card.offsetHeight,
        grabX: event.layerX,
        grabY: event.layerY,
        card: this.card,
      };

      this.$store.commit(LIFT_CARD, liftInfo);
      console.log(liftInfo);
    });
  },
}
</script>

<style scoped>
  .card-list-card {
    margin-bottom: 8px;
    padding: 8px;
    background-color: white;
    border-radius: 3px;

    box-shadow: 0 1px 0 rgba(9,30,66,.25);

    white-space: pre-wrap;
    word-wrap: break-word;
    overflow-x: hidden;

    cursor: pointer;
  }
</style>

