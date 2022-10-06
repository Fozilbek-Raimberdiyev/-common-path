<template>
    <div>
        <h1>Bu home page</h1>
        <h2>{{auth.user}}</h2>
    </div>
</template>

<script setup>
import authStore from '../stores/auth';
let auth = authStore()
</script>

<style>

</style>