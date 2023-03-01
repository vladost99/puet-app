export default {
  namespaced: true,
  state: () => ({
    search_data: {
      date: null,
      group: "",
      discipline: "",
    },
  }),

  mutations: {
    setSearchData(state, data) {
      state.search_data = { ...data };
    },
  },
  getters: {
    search_data(state) {
      return state.search_data;
    },
  },
};
