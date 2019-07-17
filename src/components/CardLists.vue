<template>
  <div id="card-lists">
    <template v-for="(list, index) in lists">
      <list-placeholder v-if="index === listPlaceholderIndex" v-bind:key='index' />
      <card-list
        v-bind:key="list.id"
        :list="list"
        :placeholderIndex="listWithPlaceholder === index ? cardPlaceholderIndex : null"
      />
    </template>

    <list-placeholder v-if="listPlaceholderIndex === lists.length" />
  </div>
</template>

<script>
import CardList from './CardList.vue';
import ListPlaceholder from './ListPlaceholder';
import { mapState } from 'vuex';

export default {
  name: 'card-lists',
  components: {
    CardList,
    ListPlaceholder,
  },
  computed: mapState({
    lists: state => state.card.lists,
    listWithPlaceholder: state => state.card.listWithCardPlaceholder,
    listPlaceholderIndex: state => state.card.listPlaceholderIndex,
    cardPlaceholderIndex: state => state.card.cardPlaceholderIndex,
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
