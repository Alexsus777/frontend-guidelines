<template>
  <div>
    <h2>Slots Component</h2>
    <slot :msg="'hi there'" />
    <h2>End of component</h2>
  </div>
</template>

<script setup lang="ts">
defineSlots<{
  default?: (props: { msg: string }) => string
}>()
</script>
