<template>
    <div v-if="auth.isAuthenticated">
        <h1>Dashboard</h1>
        <p>Ism : </p><span>{{auth.user.first_name}}</span>
        <p>Familiya : </p><span>{{auth.user.last_name}}</span>
        <p>Telefon raqami : </p><span>{{auth.user.phone_number}}</span>
        <p>Elektron pochta : </p><span>{{auth.user.username}}</span>
        <el-button @click="logOut" class="btn" type="danger">Log out</el-button>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import authStore from '../stores/auth';
let auth = authStore()
const router = useRouter()

function logOut() {
    setTimeout(() => {
        localStorage.clear()
        auth.$patch({
            user : null,
            token : null,
    })
    }, 2000);
    router.push({name:"login"})
}
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