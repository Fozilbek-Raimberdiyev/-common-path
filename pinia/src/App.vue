<script setup>
import counterStore from "@/store/counter";
import { computed, ref } from "vue";
let store = counterStore();
let texts = ref([
  {
    name: "Lorem ipsum dolor sit amet",
  },
  {
    name: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum",
  },
  {
    name: "Lorem ipsum dolor sit amet consectetur adipisicing",
  },
]);

let val = ref("");
let render = computed(() => {
  return texts.value;
});

function renderFunction() {
  return texts.value;
}

function click() {
  store.oshirish();
}
function save(v, t) {
  // t.name = v.value;
  t.name = v;
}
</script>

<template>
  <div>
    <h1>Lorem</h1>
    <div>
      {{ store.count }}
      <h1>Getter : {{ store.getter }}</h1>
      <button @click="click">Click</button>
      <div class="box" v-for="(text, index) in renderFunction()" :key="index">
        <p>{{ text.name }}</p>
        <input type="text" v-model="val" />
        <button @click="save(val, text)" class="btn">Save</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
button {
  background: #fff;
  padding: 5px 10px;
  border: 1px solid #000;
  cursor: pointer;
  outline: none;
}
.box {
  padding: 20px 30px;
  background: #354245;
  margin-top: 1rem;
}
.box p {
  color: #fff;
  font-size: 18px;
}
input {
  outline: none;
  padding: 5px 10px;
}
</style>
