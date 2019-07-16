<template>
  <div />
</template>

<script>
import { UPDATE_MOUSE_POSITION, RELEASE_CARD } from '../store/mutation-types';
import { createHash } from 'crypto';
import { mapState } from 'vuex';
import { MOUSE_MOVED } from '../store/action-types';

export default {
  name: 'mouse-position-updater',
  computed: mapState({
    liftedCardInfo: state => state.card.liftedCardInfo,
  }),
  mounted() {
    const body = document.getElementsByTagName('body')[0];
    body.addEventListener('mousemove', (event) => {
      this.$store.dispatch(MOUSE_MOVED, event);
    });

    body.addEventListener('mouseup', () => {
      if (this.liftedCardInfo) {
        this.$store.commit(RELEASE_CARD);
      }
    });
  }
};
</script>
