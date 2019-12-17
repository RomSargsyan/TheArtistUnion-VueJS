export const state = () => ({
  items: [],
  genre: [],
  item: {},
});

export const mutations = {
  SET_DATA(state, { items, genre }) {
    state.items = items;
    state.genre = genre;
  },
  SET_ITEMS(state, payload) {
    state.items = payload;
  },
  SET_GENRE(state, payload) {
    state.genre = payload;
  },
  TRACK_ITEM(state, payload){
    state.item = payload;
  }
};

export const actions = {
  async getData({ commit }) {
    await this.$axios.get('/data/tracks.json')
      .then((res) => commit('SET_DATA', res.data));
  },
  async trackItem({ commit }, payloadId) {
    await this.$axios.get('/data/tracks.json')
      .then((res) => commit('TRACK_ITEM', res.data.items[payloadId - 1]));
  },
};

export const getters = {
  data: (state) => state.items,
  genre: (state) => state.genre,
  item: (state) => state.item,
};
