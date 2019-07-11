<template>
  <div id="app">
    <card-lists />
  </div>
</template>

<script>
import CardLists from './components/CardLists.vue'

export default {
  name: 'app',
  components: {
    CardLists,
  }
}
</script>

<style>
body {
  margin: 0;
  background-color: #1a63d9;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
