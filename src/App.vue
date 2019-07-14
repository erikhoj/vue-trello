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
  box-sizing: border-box;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 60px;

  display: flex;
  flex-direction: column;
  height: 100vh;

  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;
}
</style>
