<script setup> 
import ChildComp from './childComp.vue';
import { onMounted, ref } from 'vue';
// export default {
//     components : {
//         ChildComp
//     },
//     mounted() {
//         console.log(this.$refs.child.name)
//     }
// }
const child = ref((null))
   
</script>

<template>
    <div>
        <ChildComp ref="child"></ChildComp>
        <h1>{{}}</h1>
    </div>
</template>

<style>


</style>