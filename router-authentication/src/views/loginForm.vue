<template>
    <div class="wrapper">
        <div class="sign-in" v-if="auth.isHasAccount">
            <SignIn></SignIn>
        </div>
        <div class="sign-up" v-else>
            <SignUp></SignUp>
        </div>

    </div>
</template>

<script setup>
import axios from "axios"
import { reactive, ref } from "@vue/reactivity";
import authStore from "../stores/auth"
import { useRouter } from "vue-router";
import SignIn from "../components/sign-in.vue";
import SignUp from "../components/sign-up.vue";
let auth = authStore()

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