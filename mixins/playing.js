import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      hasBeenPlay: 'player/hasBeenPlay',
      openPlayer: 'player/openPlayer',
    })
  },
  methods: {
    ...mapActions({
      trackPlayItem: 'player/trackPlayItem',
    }),
    clickPlay(id){
      this.trackPlayItem(id);
      this.$store.commit('player/OPEN_PLAYER');
    },
  },
};
