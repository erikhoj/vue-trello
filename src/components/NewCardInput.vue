<template>
  <div id="new-card-input">
    <div class="card-styling">
      <div class="name-parent">
        <span class="size-placeholder">{{ newCardName }}</span>
        <textarea
          class="new-card-input-name"
          :value="newCardName"
          @input="updateNewCardName"
          spellcheck="false"
        />
      </div>
    </div>

    <div class="new-card-action-parent">
      <button v-on:click="cancelAddingCard" class="new-card-add-button">Add Card</button>
      <div v-on:click="cancelAddingCard">
        <md-icon v-on:click.capture="cancelAddingCard" class="new-card-cancel-button">clear</md-icon>
      </div>

      <div class="new-card-more-parent">
        <div class="new-card-more-button">
          <md-icon class="new-card-more-icon">more_horiz</md-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { SET_NEW_CARD_NAME, CANCEL_ADDING_CARD } from '../store/mutation-types';

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
    cancelAddingCard () {
      this.$store.commit(CANCEL_ADDING_CARD);
    },
  },
}
</script>

<style scoped>
  #new-card-input {
    margin-bottom: 8px;
  }

  .card-styling {
    padding: 8px;
    margin-bottom: 8px;
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
    font: 400 16px;
    /* Make the text soft-wrap */
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  .new-card-action-parent {
    display: flex;
    margin-top: 8px;
    flex-direction: row;
    align-items: stretch;
  }

  .new-card-add-button {
    background-color: #5aac44;
    color: white;
    box-sizing: border-box;
    padding: 6px 12px;
    border-radius: 3px;
    border: none;
    line-height: 20px;
    cursor: pointer;

    transition-property: background-color;
    transition-duration: 85ms;
    transition-timing-function: ease;
  }

  .new-card-add-button:hover {
    background-color: #61bd4f;
  }

  .new-card-add-button:active {
    background-color: #49852e;
  }

  .new-card-cancel-button {
    margin-left: 8px;
    color: #6b778c;
    cursor: pointer;

    transition-property: color;
    transition-duration: 85ms;
    transition-timing-function: ease;
  }

  .new-card-cancel-button:hover {
    color: #172b4d;
  }

  .new-card-more-parent {
    flex: 1;
    margin-right: 8px;

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: stretch;
  }

  .new-card-more-button {
    text-align: center;
    vertical-align: middle;
    height: 32px;
    width: 32px;
    border-radius: 3px;
    cursor: pointer;

    color: #6b778c;

    transition-property: background-color, color;
    transition-duration: 85ms;
    transition-timing-function: ease;
  }

  .new-card-more-button:hover {
    color: #172b4d;
    background-color: rgba(9,30,66,.13);
  }

  .new-card-more-button:active {
    color: #172b4d;
    background-color: rgba(9,30,66,.25);
  }

  .new-card-more-icon {
    vertical-align: middle;
  }
</style>

