import Vuex from "vuex";
import Vue from "vue";
import user from "./user";
import students from "./students";
import search from "./search";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  modules: {
    user,
    students,
    search,
  },
});
