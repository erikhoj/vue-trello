<template>
</template>

<script>
import $ from "jquery";
import { UPDATE_MOUSE_POSITION, UPDATE_CARD_PLACEHOLDER_POSITION, RELEASE_CARD } from '../store/mutation-types';
import { createHash } from 'crypto';
import { mapState } from 'vuex';

export default {
  name: 'mouse-position-updater',
  computed: mapState({
    liftedCardInfo: state => state.card.liftedCardInfo,
  }),
  mounted() {
    const body = document.getElementsByTagName('body')[0];
    body.addEventListener('mousemove', (event) => {
      this.$store.commit(UPDATE_MOUSE_POSITION, event);

      const mouseX = event.clientX;
      const mouseY = event.clientY;
      if (this.liftedCardInfo) {
        // Hack, we calculate which list contains the placeholder right now
        const allLists = $(".card-list");

        let listIndex;
        let i = 0;
        for (let list of allLists) {
          const boundingRect = list.getBoundingClientRect();

          if (mouseX < boundingRect.right + list.style.margin) {
            listIndex = i;
            break;
          }

          i++;
        }

        if (listIndex === undefined) {
          listIndex = allLists.length -1;
        }

        const cards = $(allLists[listIndex]).find('.card-list-card');

        const that = this;
        let placeholderIndex = cards.length;
        cards.each(function(index, card) {
          const boundingRect = card.getBoundingClientRect();
          if (mouseY < boundingRect.top) {
            placeholderIndex = index;
            return false;
          }
        });

        this.$store.commit(UPDATE_CARD_PLACEHOLDER_POSITION, { listIndex, placeholderIndex });
      }
    });

    body.addEventListener('mouseup', () => {
      if (this.liftedCardInfo) {
        this.$store.commit(RELEASE_CARD);
      }
    });
  }
};
</script>
