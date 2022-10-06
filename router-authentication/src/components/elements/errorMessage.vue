<template>
    <el-button :plain="true" @click="error"></el-button>
  </template>
  
  <script lang="ts" setup>
    import { ref } from '@vue/reactivity'
    import { ElMessage } from 'element-plus'
    defineProps({
        mes : String
    })
  const error = () => {
    ElMessage({
      showClose: true,
      message: mes,
      type: 'error',
    })
  }

  </script>