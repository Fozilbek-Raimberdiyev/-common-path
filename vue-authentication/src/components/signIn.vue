<template>
    <div>
      <div class="form" v-if="!auth.isAuthenticated">
        <h1>Sign in form</h1>
        <label for="email">Email</label>
        <el-input type="text" id="email" placeholder="Enter the email" name="email" v-model="form.username"/>
        <label for="password">Password</label>
        <el-input type="name" name="password" id="password" placeholder="Enter the password" v-model="form.password"/>
        <el-button @click="singIn()" type="primary" class="btn">Login</el-button>
        <h1>{{}}</h1>
      </div>
      <div v-else>
        <h1>Assalomu alaykum! Saytimizga xush kelibsiz <span>{{auth?.user?.first_name}} {{auth?.user?.last_name}}</span></h1>
        <el-button @click="logOut" type="primary">Log out</el-button>
      </div>
      <div v-if="isFailed">
        <p class="error">Xatolik yuz berdi</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import {authStore} from "../store/auth"
  import { reactive, ref } from 'vue';
  import axios from "axios"
  
    let isFailed = ref(false)
    let auth = authStore()
    let isSend = ref(false)
    let store = ref("")
  
    let form = reactive({
      username: "",
      password: ""
    })
  
     async function singIn() {
        try {
          let response = await axios.post("https://learning-center-project-v01.herokuapp.com/api/auth/sign_in", form)
          isSend.value = true

       localStorage.setItem("token", response.data.object.jwt_token);
       auth.token = localStorage.getItem("token")

        setUser()
        form.username = "";
        form.password = "";
        isSend.value = false
        }
        catch {
          isFailed.value = true
          setTimeout(() => {
            isFailed.value = false
          },2500)
        }
          }



         async function setUser () {
            let response = await axios.get(
        "https://learning-center-project-v01.herokuapp.com/api/user",
        {
          headers: {
            Authorization: "Bearer " + auth.token,
          },
        }
      );
      localStorage.setItem("user", JSON.stringify(response.data.object))
        auth.user = JSON.parse(localStorage.getItem("user"))
          }  

          function logOut () {
           setTimeout(() => {
            localStorage.clear()
            return auth.token = null
           }, 2000)
          }
  
  </script>
  
  <style scoped>
    .form {
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
      width: 100%;
      margin: 5px 0;
    }
    label {
      font-size: 20px;
      margin: 50px 0 !important;
      font-family: "gilroy";
    }

    .error {
      color: red;
      font-size: 14px;
      text-align: center;
    }
.btn {
  margin: 5px 0;
}
  </style>