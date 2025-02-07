<script setup>
import { useRockets } from '../composables/useRockets';
import { RouterLink } from 'vue-router';

const { data: rockets, isLoading, error } = useRockets();
console.log(rockets);
</script>

<template>
  <div class="max-w-4xl mx-auto p-6">
    <div v-if="isLoading" class="text-center text-gray-500">Loading...</div>
    <div v-else-if="error" class="text-center text-red-500">
      Error: {{ error.message }}
    </div>

    <ul v-else class="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      <li
        v-for="rocket in rockets"
        :key="rocket.id"
        class="p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow"
      >
        <h3 class="text-lg font-semibold text-gray-800">{{ rocket.name }}</h3>
        <p class="text-sm text-gray-600 mt-2">{{ rocket.description }}</p>
        <RouterLink
          :to="`/rocket/${rocket.id}`"
          class="inline-block mt-4 text-blue-500 hover:text-blue-700 font-medium cursor-pointer"
        >
          View Details
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

