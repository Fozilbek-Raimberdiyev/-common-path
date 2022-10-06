import { ref, computed } from "vue";
import { defineStore } from "pinia";

const authStore = defineStore("auth", {
  state() {
    return {
      token: localStorage.getItem("token") || null,
      user: JSON.parse(localStorage.getItem("user")) || null,
      isHasAccount: true,
    };
  },
  getters: {
    isAuthenticated() {
      return this.token && this.user;
    },
  },
});

export default authStore;
