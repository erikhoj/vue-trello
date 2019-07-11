<template>
  <div class="card-list">
    <div class="card-list-content">
      <card-list-card v-for="card in cards" v-bind:key="card.key" v-bind:card="card" />
    </div>
  </div>
</template>

<script>
import CardListCard from './CardListCard';

export default {
  name: 'card-list',
  props: {
    cards: Array,
  },
  components: {
    CardListCard,
  },
}
</script>

<style scoped>
  .card-list {
    display: inline-block;
    margin-left: 4px;
    margin-right: 4px;
    background-color: #d0d2d6;
    height: 100px;
    width: 277px;
    border-radius: 3px;
    max-height: 100%;
  }

  .card-list-content {
    display: flex;
    flex-direction: column;
    align-items: stretch;

    padding: 4px;
  };
</style>

