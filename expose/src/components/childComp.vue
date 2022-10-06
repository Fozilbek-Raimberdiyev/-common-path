<script setup>


    // export default defineComponent({
    //     setup(props,ctx) {
    //         const name = "John";
    //         const job = "programmer"
    //         function myFunc() {
    //             alert("from child alert message")
    //         }
    //         ctx.expose({
    //             name
    //         })
    //         return {
    //             name,job
    //         }
    //     }
    // })

    const name = "john"
    const job = "programmer"
    defineExpose({
        name,job
    })
</script>

<template>
    <div>
        <h1>Child component</h1>
        <hr>
    </div>
</template>