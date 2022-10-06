<script setup>
import ParentComp from './components/parentComp.vue';
import Images from './components/images.vue';


</script>

<template>
  <div class="container">
    <parent-comp></parent-comp>
    <images></images>
  </div>
</template>

<style>
  .container {
    width: 1150px;
    margin: auto;
  }
</style>