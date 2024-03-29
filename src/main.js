import App from "./App.vue";
import Vue from "vue";
import vuetify from "./plugins/vuetify";

import store from "./store";
import router from "./routes";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  store: store,
  router,
  render: (h) => h(App),
}).$mount("#app");
