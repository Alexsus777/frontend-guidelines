<template>
  <div class="p-4">
    <h1 class="text-center py-5 font-bold text-2xl text-primary">defineModel* (experimental feature)</h1>
    <ParentSelect v-model="college" class="max-w-2xl" />
  </div>
</template>

<script lang="ts" setup>
const college = ref('')
</script>
