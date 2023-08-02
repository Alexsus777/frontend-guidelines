<template>
  <div class="p-4">
    <h1 class="text-center py-5 font-bold text-2xl text-primary">Typed Slots with defineSlots</h1>
    <SetSlots>
      <template #default="{ msg }">
        {{ msg }}
      </template>
    </SetSlots>
    <!-- <SetSlots>
      {{ num }}
    </SetSlots> -->
  </div>
</template>

<script setup lang="ts">
// const num = 5
</script>
