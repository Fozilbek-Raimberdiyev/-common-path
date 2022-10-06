import dashboard from "../components/dashboard.vue";
import signIn from "../components/signIn.vue";
import signUp from "../components/signUp.vue";
import { authStore } from "../store/auth";
let auth = authStore();
const routes = [
  {
    path: "/",
    component: dashboard,
    name: "dashboard",
    beforeEnter: (to, from, next) => {
      if (!auth.isAuthenticated) {
        return next({ name: "singIn" });
      }
    },
  },
  {
    path: "/login",
    component: signIn,
    name: "singIn",
  },
  {
    path: "/register",
    component: signUp,
    name: "signUp",
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

const app = Vue.createApp({});

app.use(router);
app.mount("#app");
