<script setup>
import { ref } from "@vue/reactivity";
import { provide } from "@vue/runtime-core";
import Child from "./components/child.vue";

const name = ref("Fozil")
provide("name", name)
</script>

<template>
    <div>
      <Child></Child>
      <input type="text" v-model="name">
      <button @click="change">change</button>
    </div>
</template>

<style>
    button {
    background: blue;
    padding: 5px 10px;
    border: 1px solid #fff;
    outline: none;
    cursor: pointer;
    color: #fff;
    border-radius: 5px;
}
</style>