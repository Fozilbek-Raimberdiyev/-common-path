<script>
import { ref } from "@vue/reactivity";
import { onMounted, useAttrs } from "@vue/runtime-core";

export default {
    inheritAttrs : false,
    props  :[
        "label"
    ],
    setup(props,{slots,attrs}) {
        console.log(attrs)
    }
    
}
</script>

<template>
    <div>
        <h1>{{label}}</h1>
        <input class="i">
        <button class="btn">set</button>
        <hr>
    </div>
</template>

<style>
.i {
    padding: 10px 15px;
    outline: none;
    border-radius: 5px;
    border: 1px solid #000;
}
.btn {
    padding: 12px 30px;
    outline: none;
    border-radius: 5px;
    border: 1px solid #fff;
    background: blue;
    color: #fff;
    cursor: pointer;
}
</style>