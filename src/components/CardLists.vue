<template>
  <div id="card-lists">
    <card-list v-for="list in lists" v-bind:key="list.id" v-bind:list="list" />
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
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: nowrap;
    flex-grow: 1;
  }
</style>

