<template>
  <div id="app">
    <card-lists />
    <dragged-card />
    <mouse-position-updater />
  </div>
</template>

<script>
import CardLists from './components/CardLists'
import DraggedCard from './components/DraggedCard';
import MousePositionUpdater from './components/MousePositionUpdater';

export default {
  name: 'app',
  components: {
    CardLists,
    DraggedCard,
    MousePositionUpdater,
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
  max-height: 100vh;
}

textarea {
  font-family: Roboto,Noto Sans,-apple-system,BlinkMacSystemFont,sans-serif;
  font-size: 100%;
  letter-spacing: .01em;
  line-height: 20px;
}
</style>
