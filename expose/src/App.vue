<script setup>
import { ref } from "@vue/reactivity";
import { onMounted, useAttrs } from "@vue/runtime-core";
import ParentComp from "./components/parentComp.vue";
import CustomInput from "./components/customInput.vue";

const name = ref("John")

</script>

<template>
  <div>
    <ParentComp></ParentComp>
    <h1>{{name}}</h1>
    <CustomInput class="input" v-model="name"></CustomInput>
  </div>

</template>

<style>


</style>