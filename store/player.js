export const state = () => {
  return {
    openPlayer: false,
    hasBeenPlay: {
      name: "",
      id: null,
    },
    playerTrack: {
      name: "",
      id: null,
    },
  };
};

export const actions = {
  async trackPlayItem({ commit }, payloadId) {
    await this.$axios.get('/data/tracks.json')
      .then((res) => commit('HAS_BENN_PLAY', res.data.items[payloadId - 1]));
  },
};

export const mutations = {
  OPEN_PLAYER(state, payload) {
    state.openPlayer = true;
  },
  HAS_BENN_PLAY(state, payload) {
    if (state.hasBeenPlay.id == payload.id) {
      state.hasBeenPlay.id = null;
      state.hasBeenPlay.name = ""
    } else {
      state.hasBeenPlay.id = payload.id;
      state.hasBeenPlay.name = payload.name;
    }
    state.playerTrack.name = payload.name;
    state.playerTrack.id = payload.id;
  }
}

export const getters = {
  openPlayer: (state) => state.openPlayer,
  hasBeenPlay: (state) => state.hasBeenPlay,
  playerTrack: (state) => state.playerTrack,
}
