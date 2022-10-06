<script setup>
import { ref } from "@vue/reactivity";
import { onMounted, useAttrs } from "@vue/runtime-core";
import CustomInput from "./customInput.vue";

let age = ref(24)

const attrs = useAttrs()

// onMounted(() => {
//     console.log(attrs)
// })

</script>


<template>
    <div>
        <h1>Form.vue</h1>
        <h1>{{age}}</h1>
        <CustomInput v-model="age" :age="age" class="form"></CustomInput>
    </div>
</template>

<style>
.form {
    background: rgba(194, 194, 206, 0.467);
    padding: 25px 30px;
    border: 1px solid #000;
    border-radius: 5px;
    outline: none;
    font-size: 18px;
}
</style>