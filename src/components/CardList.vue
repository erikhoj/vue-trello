<template>
  <div class="card-list">
    <span class="card-list-name">{{list.name}}</span>

    <div class="card-list-scrollable">
      <card-list-card v-for="card in list.cards" v-bind:key="card.key" v-bind:card="card" />
      <new-card-input v-if="isAddingCard" />
    </div>

    <a v-if="!isAddingCard" class="card-list-add" v-on:click="startAddingCard()">
      <md-icon class="card-list-add-icon">add</md-icon>
      <span class="card-list-add-text">Add a card</span>
    </a>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import CardListCard from './CardListCard';
import NewCardInput from './NewCardInput';
import { START_ADDING_CARD } from '../store/mutation-types';

export default {
  name: 'card-list',
  props: {
    list: {
      name: String,
      cards: Array,
      id: Number,
    },
  },
  computed: {
    ...mapState({
      listIdThatIsAddingCard: state => state.card.listIdThatIsAddingCard,
    }),
    isAddingCard: function () {
      return this.listIdThatIsAddingCard === this.list.id;
    }
  },
  methods: {
    startAddingCard () {
      this.$store.commit(START_ADDING_CARD, this.list.id);
    },
  },
  components: {
    CardListCard,
    NewCardInput,
  },
}
</script>

<style scoped>
  .card-list {
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

  .card-list-add-icon {
    display: inline-block;
    vertical-align: middle;
    text-decoration: none;
    width: 20px;
    height: 20px;
    min-width: 20px;
    font-size: 20px !important;
  }

  .card-list-add {
    display: block;
    color: #6b778c;
    padding: 8px;

    cursor: pointer;
  }

  .card-list-add-text {
    vertical-align: middle;
  }

  .card-list-add:hover {
    background-color: rgba(9,30,66,.13);
    color: #172b4d;
    text-decoration: underline;
  }

</style>

