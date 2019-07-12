<template>
  <div id="new-card-input">
    <div class="name-parent">
      <span class="size-placeholder">{{ newCardName }}</span>
      <textarea
        class="new-card-input-name"
        :value="newCardName"
        @input="updateNewCardName"
      />
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex';
import { SET_NEW_CARD_NAME } from '../store/mutation-types';

export default {
  name: 'new-card-input',
  computed: {
    ...mapState({
      newCardName: state => state.card.newCardName,
    }),
  },
  methods: {
    updateNewCardName (event) {
      this.$store.commit(SET_NEW_CARD_NAME, event.target.value);
    },
  },
}
</script>

<style scoped>
  #new-card-input {
    margin-bottom: 8px;
    padding: 8px;
    background-color: white;
    border-radius: 3px;

    box-shadow: 0 1px 0 rgba(9,30,66,.25);
  }

  .name-parent {
    position: relative;
    min-height: 60px;
    max-height: 250px;
    overflow: hidden;
  }

  .size-placeholder {
    visibility: hidden;
    width: 100%;
  }

  .new-card-input-name {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: none;
    background-color: none;
    width: 100%;
    height: 100%;
    resize: none;
  }

  .size-placeholder,
  .new-card-input-name {
    font: 400 13px/16px helvetica, arial, sans-serif;
    /* Make the text soft-wrap */
    white-space: pre-wrap;
    word-wrap: break-word;
  }
</style>

