<template>
    <div>
      <form @submit.prevent.once="singUp()" v-if="!auth.isAuthenticated">
        <h1>Sign in form</h1>
        <div class="first" v-if="!isSend">
            <label for="firstName">Ismingiz</label>
            <el-input type="text" id="email" placeholder="Enter the first Name" name="firstName" v-model="form.first_name"/>
            <label for="lastName">Familiyangiz</label>
            <el-input type="name" name="password" id="lastName" placeholder="Enter the last Name" v-model="form.last_name"/>
            <label for="number">Telefon raqamingiz</label>
            <el-input type="text" id="number" v-model="form.phone_number" placeholder="Enter the phone number"/>
            <label for="email">Email</label>
            <el-input @input.self="change" type="text" id="email" v-model="form.username" placeholder="Enter the email"/>
            <label for="password">Parol</label>
            <el-input :showPassword="true" type="text" id="password" v-model="form.password" placeholder="Enter the password"/>
            <button type="submit">Keyingisi</button>
        </div>
        <div class="second" v-else>
            <label for="verify">Biz sizning pochtangizga tasdiqlash kodini jo'natdik</label>
            <el-input type="text" id="verify" placeholder="Tasdiqlash kodini kiriting" v-model="verifyForm.code"/>
            <button @click.self="sendVerify">Register</button>
        </div>
      </form>
      <div v-else>
        <h1>Assalomu alaykum! Saytimizga xush kelibsiz <span>{{auth?.user?.first_name}} {{auth?.user?.last_name}}</span></h1>
      </div>
    </div>
  </template>
  
  <script setup>
  import {authStore} from "../store/auth"
  import { onMounted, reactive, ref } from 'vue';
  import axios from "axios"

  let isSend = ref(false)
  
  
    let auth = authStore()
  
    let form = reactive({
      username: "",
      password: "",
      first_name : "",
      last_name: "",
      phone_number : ""
    })
     async function singUp() {
        let response = await axios.post("https://learning-center-project-v01.herokuapp.com/api/auth/sign_up", form)
        isSend.value = true 
          } 

          let verifyForm = reactive({
            username : "",
            code : ""
          })
          async function sendVerify () {
            let response = await axios.post("https://learning-center-project-v01.herokuapp.com/api/auth/verification", verifyForm)
            auth.token =   await response.data.object.jwt_token;
            setUser()
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
      auth.$patch({
        user : response.data.object
      })
          }  

          function change (e) {
            verifyForm.username = e
          }
  
  
  </script>
  
  <style scoped>
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
      margin-top: 10rem;
    }
    button {
      font-size: 18px;
      margin-top: 5px;
      background: #83C0FF;
      padding: 6px 25px;
      border: 1px solid #fff;
      border-radius: 5px;
      cursor: pointer;
      color: #fff;
      width: 30%;
    }
  </style>

  "faxriddinabdirazzoqov@gmail.com"