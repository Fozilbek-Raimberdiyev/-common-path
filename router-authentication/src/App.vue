<template>
  <div class="container">
    <NavBar></NavBar>
    <router-view></router-view>
  </div>
  
</template>

<script setup>
import NavBar from './components/navBar.vue';
import authStore from './stores/auth';
let auth = authStore()

</script>

<style>
  body {
    overflow-x: hidden;
  }
  /* .container {
    width: 1000px;
    margin: 0 auto;
  } */

  @media screen and (max-width: 400px) {
    .container {
      width: 390px;
      margin: 0 auto;
    }
  }
   @media screen and (max-width: 600px) {
    .container {
      width: 560px;
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 900px) {
    .container {
      width: 850px;
      margin: 0 auto;
    }
  }

</style>