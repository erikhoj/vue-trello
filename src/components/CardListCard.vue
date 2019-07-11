<template>
  <div class="card-list-card">
    <span>{{ card.text }}</span>
  </div>
</template>

<script>
export default {
  name: 'card-list-card',
  props: {
    card: {
      text: String,
      id: Number,
    },
  },
}
</script>

<style scoped>
  .card-list-card {
    padding: 4px;
    background-color: white;
    border-radius: 3px;

    box-shadow: 0 1px 0 rgba(9,30,66,.25);
  }
</style>

