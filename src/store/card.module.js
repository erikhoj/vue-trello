import { START_ADDING_CARD, SET_NEW_CARD_NAME, CANCEL_ADDING_CARD, CONFIRM_ADDING_CARD } from './mutation-types';

let nextListId = 0;
let nextCardId = 0;

const state = {
  listIdThatIsAddingCard: undefined,
  newCardName: undefined,
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
};

export default {
  state,
  mutations,
};
