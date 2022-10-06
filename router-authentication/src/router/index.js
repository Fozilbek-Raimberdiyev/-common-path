import { createRouter, createWebHistory } from "vue-router";
import dashboard from "../views/dashboard.vue";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "../App.vue";

const app = createApp(App);

app.use(createPinia());

import authStore from "../stores/auth";
let auth = authStore();

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("../views/home.vue"),
      name: "home",
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: dashboard,
    },
    {
      path: "/me",
      component: () => import("../views/me.vue"),
      name: "me",
    },
    {
      path: "/login",
      component: () => import("../views/loginForm.vue"),
      name: "login",
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name !== "login" && !auth.isAuthenticated) {
    next({ name: "login" });
  } else next();
});

export default router;
