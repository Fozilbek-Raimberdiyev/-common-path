<script setup>
import { ref } from "@vue/reactivity";
import ChildComp from "../src/components/childComp.vue"

let arr = ref([1,2,3,4,5])

function getEvent(e) {
  alert(arr)
}
</script>

<template>
  <div>
    <ChildComp :arr="arr" @send="()=>{}"></ChildComp>
  </div>
</template>

<style>

</style>