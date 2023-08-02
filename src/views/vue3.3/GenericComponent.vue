<template>
  <div class="p-4">
    <h1 class="text-center py-5 font-bold text-2xl text-primary">Generic Component</h1>
    <GenericCmp :items="users">
      <template #default="{ item }">
        <div>
          <p class="font-semibold">
            {{ item.name }}
          </p>
          <p class="font-medium">{{ item.university }}</p>
          <p>{{ item.age }}</p>
        </div>
      </template>
    </GenericCmp>
  </div>
</template>

<script lang="ts" setup>
interface IUser {
  id: number
  name: string
  university: string
  age: number | string
}

const users = ref<IUser[]>([
  { id: 1, name: 'Andrew', university: 'Massachusetts Institute of Technology (MIT), USA', age: 27 },
  { id: 2, name: 'Kate', university: 'California Institute of Technology (Caltech), USA', age: 29 },
  { id: 3, name: 'Ann', university: 'ETH Zurich - Swiss Federal Institute of Technology, Switzerland', age: 29 },
  { id: 4, name: 'Helen', university: 'University of California, Los Angeles (UCLA), USA', age: 'forever 23' },
  { id: 5, name: 'Oleh', university: 'University of Melbourne, Australia', age: 24 }
])
</script>
