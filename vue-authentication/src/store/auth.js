import { defineStore } from "pinia";
import axios from "axios";
export const authStore = defineStore("auth", {
  state: () => {
    return {
      token: localStorage.getItem("token") || null,
      user: JSON.parse(localStorage.getItem("user")) || null,
    };
  },
  getters: {
    isAuthenticated(state) {
      return state.token && state.user;
    },
  },
  actions: {
    async setUser() {
      let response = await axios.get(
        "https://learning-center-project-v01.herokuapp.com/api/user",
        {
          headers: {
            Authorization: "Bearer " + auth.token,
          },
        }
      );
    },
  },
});
