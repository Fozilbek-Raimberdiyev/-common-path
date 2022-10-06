<script setup>
defineProps(["arr"])
const emit = defineEmits(["send"])
function sendEmit() {
emit("send")
}
</script>

<template>
    <div>
        <h1></h1>
        <button @click="sendEmit">Send event</button>
    </div>
</template>

<style scoped>
button {
    background: #fff;
    padding: 5px 10px;
    border: 1px solid #000;
    cursor: pointer;
    border-radius: 5px;
}
button:hover {
    background: #ccc;
}
</style>