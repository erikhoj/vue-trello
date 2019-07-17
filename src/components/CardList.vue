<template>
  <div class="card-list-parent">
    <div ref="container" class="card-list">
      <span ref="handle" class="card-list-name" draggable="true">{{list.name}}</span>

      <div ref="scrollable" class="card-list-scrollable">
        <template v-for="(card, index) in list.cards">
          <card-placeholder v-if="index === placeholderIndex" v-bind:key='index' />
          <card-list-card v-bind:key="card.id" v-bind:card="card" />
        </template>

        <card-placeholder v-if="placeholderIndex === list.cards.length" />
        <new-card-input v-if="isAddingCard" />
      </div>

      <a v-if="!isAddingCard" class="card-list-add" v-on:click="startAddingCard()">
        <md-icon class="card-list-add-icon">add</md-icon>
        <span class="card-list-add-text">Add a card</span>
      </a>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapState } from 'vuex';
import CardListCard from './CardListCard';
import NewCardInput from './NewCardInput';
import { START_ADDING_CARD } from '../store/mutation-types';
import CardPlaceholder from './CardPlaceholder';
import { LIFT_LIST } from '../store/action-types';

export default {
  name: 'card-list',
  props: {
    list: {
      name: String,
      cards: Array,
      id: Number,
    },
    placeholderIndex: Number,
  },
  components: {
    CardListCard,
    NewCardInput,
    CardPlaceholder,
  },
  computed: {
    ...mapState({
      listIdThatIsAddingCard: state => state.card.listIdThatIsAddingCard,
      liftedCardInfo: state => state.card.liftedCardInfo,
      liftedListInfo: state => state.card.liftedListInfo,
      mousePosition: state => state.card.mousePosition,
    }),
    isAddingCard: function () {
      return this.listIdThatIsAddingCard === this.list.id;
    },
  },
  methods: {
    startAddingCard () {
      this.$store.commit(START_ADDING_CARD, this.list.id);

      const scrollable = this.$refs.scrollable;
      Vue.nextTick(function() {
        scrollable.scrollTop = scrollable.scrollHeight;
      });
    },
  },
  mounted() {
    this.$refs.handle.addEventListener('dragstart', (event) => {
      if (this.liftedListInfo) {
        return;
      }

      const boundingRect = this.$refs.container.getBoundingClientRect();

      const liftInfo = {
        width: this.$refs.container.offsetWidth,
        height: this.$refs.container.offsetHeight,
        grabX: event.clientX - boundingRect.left,
        grabY: event.clientY - boundingRect.top,
        list: this.list,
      };

      this.$store.dispatch(LIFT_LIST, liftInfo);
    });
  },
}
</script>

<style scoped>
  .card-list-parent {
    height: 100%;
    max-height: 100%;
    padding-bottom: 8px;
  }

  .card-list {
    margin-left: 4px;
    margin-right: 4px;
    background-color: #d0d2d6;
    width: 277px;
    border-radius: 3px;
    max-height: 100%;

    padding-top: 8px;

    display: flex;
    flex-direction: column;
  }

  .card-list-name {
    font-weight: 400;
    font-size: 115%;
    margin-left: 16px;
    color: #172b4d;

    cursor: pointer;
  }

  .card-list-scrollable {
    flex: 1 1 auto;
    padding: 8px;
    padding-bottom: 0px;

    display: flex;
    flex-direction: column;

    overflow-x: hidden;
    overflow-y: auto;
  }

  .card-list-add-icon {
    display: inline-block;
    vertical-align: middle;
    text-decoration: none;
    width: 20px;
    height: 20px;
    min-width: 20px;
    font-size: 20px !important;
  }

  .card-list-add {
    display: block;
    color: #6b778c;
    padding: 8px;

    cursor: pointer;
  }

  .card-list-add-text {
    vertical-align: middle;
  }

  .card-list-add:hover {
    background-color: rgba(9,30,66,.13);
    color: #172b4d;
    text-decoration: underline;
  }

</style>

