<template>
    <div>
        <h1>Foydalanuvchi : {{auth}}</h1>
    </div>
</template>

<script setup>


import { authStore } from '../store/auth';
let auth = authStore()
</script>

<style>

</style>