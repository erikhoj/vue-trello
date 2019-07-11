<template>
  <div class="card-list">
    <span class="card-list-name">{{list.name}}</span>

    <div class="card-list-scrollable">
      <card-list-card v-for="card in list.cards" v-bind:key="card.key" v-bind:card="card" />
    </div>

    <a class="card-list-add">
      + Add another card
    </a>
  </div>
</template>

<script>
import CardListCard from './CardListCard';

export default {
  name: 'card-list',
  props: {
    list: {
      name: String,
      cards: Array,
      id: Number,
    },
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
    width: 277px;
    border-radius: 3px;
    max-height: 100%;

    padding-top: 8px;
  }

  .card-list-name {
    font-weight: 400;
    font-size: 115%;
    margin-left: 16px;
    color: #172b4d;
  }

  .card-list-scrollable {
    padding: 8px;
    padding-bottom: 0px;

    display: flex;
    flex-direction: column;
    align-items: stretch;

    overflow-y: auto;
  }

  .card-list-add {
    display: block;
    font-size: 85%;
    color: #172b4d;
    padding: 8px;

    cursor: pointer;
  }

  .card-list-add:hover {
    background-color: rgba(9,30,66,.13);
    color: #172b4d;
    text-decoration: underline;
  }

</style>

