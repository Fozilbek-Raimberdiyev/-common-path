<script setup>
import { inject } from 'vue';

const name = inject("name")

</script>

<template>
    <div>
        <h1>GrandChild, name : {{name}}</h1>
    </div>
</template>

<style>
button {
    background: blue;
    padding: 5px 10px;
    border: 1px solid #fff;
    outline: none;
    cursor: pointer;
    color: #fff;
    border-radius: 5px;
}
</style>