<template>
    <div class="wrapper">
        <div class="sign-in">
            <span>Email</span>
            <el-input placeholder="Enter your email" v-model="sForm.username"/>
            <span>Parol</span>
            <el-input placeholder="Enter your password" v-model="sForm.password" :show-password="true"/>
            <el-button @click="login" class="btn" type="primary">Kirish</el-button>
            <p>Sizning akkauntingiz yo'qmi? Unda ro'yhatdan <span @click="auth.isHasAccount=false" class="info">o'ting!</span></p>
            <div class="error" v-if="hasError">
                <!-- <ErrorMessage :mes="mes"></ErrorMessage> -->
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
let sForm = reactive({
    username : "",
    password : ""
})

let hasError = ref(false)


async function login () {
    try{
        let response = await axios.post("https://learning-center-project-v01.herokuapp.com/api/auth/sign_in", sForm)
        auth.token = response.data.object.jwt_token;
        localStorage.setItem("token", auth.token);
        await setUser(auth.token);
        router.push({name : "home"})
    } catch(e){
        hasError.value = true;
        console.log(e.response.data.message)
    }   
}

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