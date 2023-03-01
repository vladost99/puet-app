export default {
  namespaced: true,
  state: () => ({
    user: {
      name: "Vlad",
      role: 0,
    },
  }),
  actions: {
    login(context) {
      context.commit("setUser", {
        name: "Vlad",
        role: 0,
      });
    },
  },
  mutations: {
    setUser(state, data) {
      state.user = data;
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
  },
};
