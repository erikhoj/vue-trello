<template>
  <div id="card-lists">
    <card-list />
    <card-list />
    <card-list />
    <card-list />
    <card-list />
    <card-list />
  </div>
</template>

<script>
import CardList from './CardList.vue';

export default {
  name: 'card-lists',
  components: {
    CardList,
  },
}
</script>


<style scoped>
  #card-lists {
    white-space: nowrap;
  }
</style>

