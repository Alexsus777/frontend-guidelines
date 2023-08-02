<template>
  <div class="flex flex-col gap-2 max-w-2xl">
    <label for="fname">First name:</label>
    <el-input v-model="input1" />
    <el-input v-model="input2" />
    <el-input v-model="input3" v-bind="$attrs" />
    <el-input v-model="input4" />
  </div>
</template>

<script setup lang="ts">
defineOptions({ inheritAttrs: false })

const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const input4 = ref('')
</script>
