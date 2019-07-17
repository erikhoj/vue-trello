<template>
  <div id="card-lists">
    <card-list
      v-for="(list, index) in lists"
      v-bind:key="list.id" :list="list"
      :placeholderIndex="listWithPlaceholder === index ? placeholderIndex : null"
    />
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
    listWithPlaceholder: state => state.card.listWithCardPlaceholder,
    placeholderIndex: state => state.card.cardPlaceholderIndex,
  }),
}
</script>

<style scoped>
  #card-lists {
    flex-grow: 1;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: nowrap;

    max-height: 100%;
  }
</style>
