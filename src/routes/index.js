import Router from "vue-router";
import Vue from "vue";
import Home from "../pages/Home";
import Login from "../pages/Login";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Home",
    component: Login,
  },
];
const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
