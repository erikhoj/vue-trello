import { START_ADDING_CARD, SET_NEW_CARD_NAME, CANCEL_ADDING_CARD, CONFIRM_ADDING_CARD, LIFT_CARD, UPDATE_MOUSE_POSITION, UPDATE_CARD_PLACEHOLDER_POSITION, RELEASE_CARD } from './mutation-types';

let nextListId = 0;
let nextCardId = 0;

const state = {
  listIdThatIsAddingCard: undefined,
  newCardName: undefined,
  liftedCardInfo: undefined,
  mousePosition: undefined,
  listWithCardPlaceholder: undefined,
  cardPlaceholderIndex: undefined,
  lists: [
    {
      name: 'list 1',
      cards: [
        {
          text: 'card 1',
          id: nextCardId++,
        },
      ],
      id: nextListId++,
    },
    {
      name: 'list 2',
      cards: [
        {
          text: 'card 1',
          id: nextCardId++,
        },
      ],
      id: nextListId++,
    },
  ],
};

const getList = (state, id) => state.lists.find(l => l.id === id);
const getListWithCard = (state, cardId) => state.lists.find(l => l.cards.find(c => c.id === cardId));

const mutations = {
  [START_ADDING_CARD] (state, listId) {
    state.listIdThatIsAddingCard = listId;
    state.newCardName = "";
  },

  [SET_NEW_CARD_NAME] (state, newName) {
    state.newCardName = newName;
  },

  [CANCEL_ADDING_CARD] (state) {
    state.listIdThatIsAddingCard = undefined;
    state.newCardName = undefined;
  },

  [CONFIRM_ADDING_CARD] (state) {
    const list = getList(state, state.listIdThatIsAddingCard);
    list.cards.push({
      text: state.newCardName,
      id: nextCardId++,
    }),

    state.listIdThatIsAddingCard = undefined;
    state.newCardName = undefined;
  },

  [LIFT_CARD] (state, liftInfo) {
    state.liftedCardInfo = liftInfo;

    // Remove the card from the current list
    const listWithCard = getListWithCard(state, liftInfo.card.id);
    listWithCard.cards = listWithCard.cards.filter(c => c.id !== liftInfo.card.id);
  },

  [UPDATE_MOUSE_POSITION] (state, event) {
    state.mousePosition = {
      x: event.clientX,
      y: event.clientY,
    };
  },

  [UPDATE_CARD_PLACEHOLDER_POSITION] (state, { listIndex, placeholderIndex }) {
    state.listWithCardPlaceholder = listIndex;
    state.cardPlaceholderIndex = placeholderIndex;
  },

  [RELEASE_CARD] (state) {
    state.lists[state.listWithCardPlaceholder].cards.splice(state.cardPlaceholderIndex, 0, state.liftedCardInfo.card);
    state.listWithCardPlaceholder = undefined;
    state.cardPlaceholderIndex = undefined;
    state.liftedCardInfo = undefined;
  },
};

export default {
  state,
  mutations,
};
