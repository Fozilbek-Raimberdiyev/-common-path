<script setup>
import { ref } from "@vue/reactivity";
import ChildComp from "./childComp.vue"
let name = ref("John")

</script>

<template>
    <div>
        <ChildComp></ChildComp>
    </div>
</template>

<style>

</style>