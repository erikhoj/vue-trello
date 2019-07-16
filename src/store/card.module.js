import $ from "jquery";
import { START_ADDING_CARD, SET_NEW_CARD_NAME, CANCEL_ADDING_CARD, CONFIRM_ADDING_CARD, UPDATE_LIFTED_CARD_INFO, UPDATE_MOUSE_POSITION, UPDATE_CARD_PLACEHOLDER_POSITION, RELEASE_CARD } from './mutation-types';
import { LIFT_CARD, MOUSE_MOVED } from './action-types';

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

  [UPDATE_LIFTED_CARD_INFO] (state, liftInfo) {
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

const calculateNewCardPlaceholderPosition = ({ commit, state }, mousePosition = undefined) => {
  mousePosition = mousePosition ? mousePosition : state.mousePosition;

  // Hack, we calculate which list contains the placeholder right now
  const allLists = $(".card-list");

  let listIndex;
  let i = 0;
  for (let list of allLists) {
    const boundingRect = list.getBoundingClientRect();

    if (mousePosition.x < boundingRect.right + list.style.margin) {
      listIndex = i;
      break;
    }

    i++;
  }

  if (listIndex === undefined) {
    listIndex = allLists.length -1;
  }

  const cards = $(allLists[listIndex]).find('.card-list-card');

  let placeholderIndex = cards.length;
  cards.each(function(index, card) {
    const boundingRect = card.getBoundingClientRect();
    if (mousePosition.y < (boundingRect.top + boundingRect.bottom) / 2) {
      placeholderIndex = index;
      return false;
    }
  });

  commit(UPDATE_CARD_PLACEHOLDER_POSITION, { listIndex, placeholderIndex });
}

const actions = {
  [LIFT_CARD] ({ commit, state }, liftInfo) {
    const listWithCard = getListWithCard(state, liftInfo.card.id);
    const listIndex = state.lists.indexOf(listWithCard);
    const cardIndex = listWithCard.cards.indexOf(listWithCard.cards.find(c => c.id === liftInfo.card.id));
    commit(UPDATE_LIFTED_CARD_INFO, liftInfo);
    commit(UPDATE_CARD_PLACEHOLDER_POSITION, { listIndex, placeholderIndex: cardIndex });
  },

  [MOUSE_MOVED] ({ commit, state }, event) {
    commit(UPDATE_MOUSE_POSITION, event);

    if (state.liftedCardInfo) {
      calculateNewCardPlaceholderPosition({ commit, state }, { x: event.clientX, y: event.clientY });
    }
  },
};

export default {
  state,
  mutations,
  actions,
};
