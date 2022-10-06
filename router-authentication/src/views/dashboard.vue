<template>
    <div v-if="auth.user && auth.token">
        <h1>Dashboard</h1>
        <p>Ism : </p><span>{{auth.user.first_name}}</span>
        <p>Familiya : </p><span>{{auth.user.last_name}}</span>
        <p>Telefon raqami : </p><span>{{auth.user.phone_number}}</span>
        <p>Elektron pochta : </p><span>{{auth.user.username}}</span>

        <el-button @click="logOut" class="btn" type="danger">Log out</el-button>
        <h1>{{auth}}</h1>
    </div>
</template>

<script setup>
import { watch } from '@vue/runtime-core';
import { useRouter } from 'vue-router';
import authStore from '../stores/auth';
let auth = authStore()
const router = useRouter()

function logOut() {
    localStorage.clear()
    auth.$patch({
        user : null,
        token : null,
    })
}

watch(auth.user, () => {
    console.log("ishladi")
})
</script>

<style scoped>
    p {
        font-weight: 700;
    }
    .btn {
        display: block;
        margin: 5px 0;
    }
</style>