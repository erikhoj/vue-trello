<template>
  <div class="new-list-input">
    <div class="not-adding-list" v-if="!isAddingList" v-on:click="startAddingList">
        <md-icon>add</md-icon>
        <span>Add another list</span>
    </div>

    <div class="adding-list-parent" v-if="isAddingList">
      <input
        ref="nameInput"
        name="name"
        class="list-name-input"
        placeholder="Enter list title..."
        maxlength="512"
        :value="newListName"
        @input="setNewListName"
      />
      <button class="add-button" v-on:click="confirmAddingList">
        Add List
      </button>

      <span v-on:click.capture="cancelAddingList">
        <md-icon  class="cancel-button">clear</md-icon>
      </span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { START_ADDING_LIST, SET_NEW_LIST_NAME, CANCEL_ADDING_LIST, CONFIRM_ADDING_LIST } from '../store/mutation-types';

export default {
  name: 'new-list-input',
  computed: {
    ...mapState({
      isAddingList: state => state.card.isAddingList,
      newListName: state => state.card.newListName,
    }),
  },
  methods: {
    startAddingList() {
      this.$store.commit(START_ADDING_LIST);
    },

    setNewListName(event) {
      this.$store.commit(SET_NEW_LIST_NAME, event.target.value);
    },

    cancelAddingList() {
      this.$store.commit(CANCEL_ADDING_LIST);
    },

    confirmAddingList() {
      if (!this.newListName) {
        this.$refs.nameInput.focus();
        return;
      }

      this.$store.commit(CONFIRM_ADDING_LIST);
    }
  },
}
</script>

<style scoped>
  .new-list-input {
    width: 277px;
    margin-left: 4px;
  }

  .not-adding-list {
    border-radius: 3px;
    min-height: 32px;

    background-color: rgba(0,0,0,.12);
    color: hsla(0,0%,100%,.8);

    transition: background 85ms ease-in,opacity 40ms ease-in,border-color 85ms ease-in;
    padding: 8px;

    cursor: pointer;
  }

  .not-adding-list > span {
    vertical-align: middle;
  }

  .not-adding-list:hover {
    background-color: rgba(0,0,0,.24);
  }

  .adding-list-parent {
    border-radius: 3px;
    background-color: #d0d2d6;
    padding: 4px;
  }

  .list-name-input {
    background: white;
    border: none;
    box-shadow: inset 0 0 0 2px #0079bf;
    width: 100%;
    padding: 8px 12px;

    margin-bottom: 4px;
  }

  .add-button {
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

  .add-button:hover {
    background-color: #61bd4f;
  }

  .add-button:active {
    background-color: #49852e;
  }

  .cancel-button {
    margin-left: 8px;
    color: #6b778c;
    cursor: pointer;

    transition-property: color;
    transition-duration: 85ms;
    transition-timing-function: ease;
  }

  .cancel-button:hover {
    color: #172b4d;
  }
</style>

