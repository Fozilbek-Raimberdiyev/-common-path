<template>
    <div>
        <n-loading-bar-provider>
      <n-message-provider>
        <n-notification-provider>
          <n-dialog-provider>
            <childComp></childComp>
          </n-dialog-provider>
        </n-notification-provider>
      </n-message-provider>
    </n-loading-bar-provider>
    <div class="form">
        <h1 class="name">{{name}}</h1>
        <n-input v-model:value="name" placeholder="Enter the name" size="small"></n-input>
        <n-button type="primary" v-model="name">Enter</n-button>
    </div>
    </div>
    </template>
    
    <script>
    import { defineComponent, ref } from "vue";
    import childComp from "./childComp.vue";
    
    export default defineComponent({
    components: {
        childComp,
    },
    setup() {
        const name = ref("John");

        return {
            name
        }
    }
    });
    </script>

    <style>
        .form {
            margin-top: 2rem;
        }
        input {
            width: 50% !important;
        }
        .name {
            height: 100px;
        }
    </style>