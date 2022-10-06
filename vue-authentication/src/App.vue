<template>
  <div class="container">
    <!-- <SignIn></SignIn> -->
    <SignUp></SignUp>
    <router-link to="/">Dashboard</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/register">Log out</router-link>
    <Dashboard></Dashboard>
    <router-view></router-view>
  </div>
</template>

<script setup>
import SignIn from "./components/signIn.vue";
import SignUp from "./components/signUp.vue";
import Dashboard from "./components/dashboard.vue";


</script>

<style scoped>

  .container {
    width: 1000px;
    margin: 0 auto;
  }
  form {
    width: 500px;
    margin: 0 auto;
  }
  input {
    display: block;
    padding: 10px 15px;
    background: #f3e7e7;  
    border: 1px solid #000; 
    outline: none;
    border-radius: 5px;
    font-size: 18px;
    width: 100%;
  }
  label {
    font-size: 20px;
    margin: 10px 0;
  }
  button {
    font-size: 18px;
    margin-top: 5px;
    background: blue;
    padding: 10px 25px;
    border: 1px solid #fff;
    border-radius: 5px;
    cursor: pointer;
    color: #fff;
    width: 30%;
  }
</style>