<template>
    <div class="wrapper">
        <div class="sign-up">
            <div class="form" v-if="!isSend">
                <span>Ism</span>
                <el-input placeholder="Enter your first name" v-model="rForm.first_name"/>
                <span>Familiya</span>
                <el-input placeholder="Enter your last name" v-model="rForm.last_name"/>
                <span>Email</span>
                <el-input @input="verifyForm.username=$event" placeholder="Enter your email" v-model="rForm.username"/>
                <span>Telefon raqam</span>
                <el-input placeholder="Enter your phone number" v-model="rForm.phone_number"/>
                <span>Parol</span>
                <el-input placeholder="Enter your password" v-model="rForm.password" :show-password="true"/>
                <el-button @click.once="register" class="btn" type="primary">Yuborish</el-button>
                <p>Sizning akkauntingiz bormi? Unda <span @click="auth.isHasAccount=true" class="info">kiring!</span></p>
            </div>
            <div class="verify" v-else>
                <span>Tasdiqlash kodini pochtangizga yubordik</span>
                <el-input v-model="verifyForm.code"/>
                <el-button @click.once="sendVerify" type="primary">Ro'yhatdan o'tish</el-button>
            </div>
        </div>

    </div>
</template>

<script setup>
import axios from "axios"
import { reactive, ref } from "@vue/reactivity";
import authStore from "../stores/auth"
import { useRouter } from "vue-router";
let auth = authStore()
const router = useRouter()
let hasError = ref(false)
/// register

let isSend = ref(false)

let rForm = reactive({
      username: "",
      password: "",
      first_name : "",
      last_name: "",
      phone_number : ""
    })

   let verifyForm = reactive({
        username : ref(""),
        code : ref()
   })


   async function setUser (token) {
    let response = await axios.get("https://learning-center-project-v01.herokuapp.com/api/user" , {
        headers: {
            Authorization: "Bearer " + token,
        }
    })
    auth.$patch({
        user : response.data.object,
    })
    localStorage.setItem("user", JSON.stringify(auth.user))
}

   async function register () {
        try{
            let response =  await axios.post("https://learning-center-project-v01.herokuapp.com/api/auth/sign_up", rForm);
            isSend.value = true;
        } catch(e) {
            console.log(e)
        }
    }

    function toHome() {
        router.push({
            name: "home"
        })
    }

    async function sendVerify () {
        try{
        let response = await axios.post("https://learning-center-project-v01.herokuapp.com/api/auth/verification", verifyForm)
        auth.token = response.data.object.jwt_token;
        localStorage.setItem("token", auth.token);
        await setUser(auth.token);
        await router.push({path : "/"})
    } catch(e){
        console.log(e.response.data.message)
    }  

    }
</script>

<style scoped>
    .wrapper {
        width: 700px;
        margin: 0 auto;
    }
    span {
        display: inline-block;
        margin: 8px 0;
        font-size: 17px;
    }
.info {
    color: #2e3097;
    cursor: pointer;
}

.btn {
    width: 150px;
    margin: 5px auto;
    padding: 5px 10px;
    align-items: center;
    display: flex;
}

@media screen and (max-width: 700px) {
    .wrapper{
        width: 500px;
        margin: 0 auto;
    }
}
</style>