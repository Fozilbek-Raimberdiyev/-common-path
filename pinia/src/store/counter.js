import { defineStore } from "pinia";
const counterStore = defineStore("counter", {
  state: () => {
    return {
      count: 1,
    };
  },
  getters: {
    getter() {
      return this.count * 2;
    },
  },
  actions: {
    oshirish() {
      this.count++;
    },
    async getAPi() {
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          title: "foo",
          body: "bar",
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    },
  },
});
export default counterStore;
