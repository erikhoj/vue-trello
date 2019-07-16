<template>
  <div draggable="true" ref="card" class="card-list-card">
    <span>{{ card.text }}</span>
  </div>
</template>

<script>
import { LIFT_CARD } from '../store/action-types';

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
      const boundingRect = this.$refs.card.getBoundingClientRect();

      const liftInfo = {
        width: this.$refs.card.offsetWidth,
        height: this.$refs.card.offsetHeight,
        grabX: event.clientX - boundingRect.left,
        grabY: event.clientY - boundingRect.top,
        card: this.card,
      };

      this.$store.dispatch(LIFT_CARD, liftInfo);
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

