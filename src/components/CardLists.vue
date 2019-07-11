<template>
  <div id="card-lists">
    <card-list v-for="list in lists" v-bind:key="list.id" v-bind:cards="list.cards" />
  </div>
</template>

<script>
import CardList from './CardList.vue';
import { mapState } from 'vuex';

export default {
  name: 'card-lists',
  components: {
    CardList,
  },
  computed: mapState({
    lists: state => state.card.lists,
  }),
}
</script>


<style scoped>
  #card-lists {
    white-space: nowrap;
  }
</style>

