<template>
  <div class="p-4">
    <h1 class="text-center py-5 font-bold text-2xl text-primary">More Ergonomic defineEmits</h1>
    <AppButton
      :type="$buttonType.primary"
      :size="$buttonSize.large"
      class="w-1/5 border text-primary rounded-sm"
      @click="handleButtonClick"
    >
      Apply
    </AppButton>
  </div>
</template>

<script lang="ts" setup>
function handleButtonClick (message: string, ...rest: any[]) {
  console.log('click event:', message, rest)
}
</script>
