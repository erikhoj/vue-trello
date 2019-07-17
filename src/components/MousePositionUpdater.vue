<template>
  <div />
</template>

<script>
import { RELEASE_CARD, RELEASE_LIST } from '../store/mutation-types';
import { mapState } from 'vuex';
import { MOUSE_MOVED } from '../store/action-types';

export default {
  name: 'mouse-position-updater',
  computed: mapState({
    liftedCardInfo: state => state.card.liftedCardInfo,
    liftedListInfo: state => state.card.liftedListInfo,
  }),
  mounted() {
    const body = document.getElementsByTagName('body')[0];
    body.addEventListener('mousemove', (event) => {
      this.$store.dispatch(MOUSE_MOVED, event);
    });

    body.addEventListener('mouseup', () => {
      if (this.liftedCardInfo) {
        this.$store.commit(RELEASE_CARD);
      } else if (this.liftedListInfo) {
        this.$store.commit(RELEASE_LIST);
      }
    });
  }
};
</script>
