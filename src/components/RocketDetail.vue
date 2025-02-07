<script setup>
import { useRocket } from '../composables/useRocket';
import { useRoute } from 'vue-router';

const route = useRoute();
const { data: rocket, isLoading, error } = useRocket(route.params.id);
</script>

<template>
  <div class="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
    <h2 class="text-2xl font-bold text-center mb-6">Rocket Details</h2>

    <div v-if="isLoading" class="text-center text-gray-500">Loading...</div>
    <div v-else-if="error" class="text-center text-red-500">Error: {{ error.message }}</div>

    <div v-else>
      <h3 class="text-xl font-semibold text-gray-800 mb-4">{{ rocket.name }}</h3>

      <div class="space-y-2 text-gray-700">
        <p><span class="font-semibold">Description:</span> {{ rocket.description }}</p>
        <p><span class="font-semibold">First Flight:</span> {{ rocket.first_flight }}</p>
        <p><span class="font-semibold">Cost per Launch:</span> ${{ rocket.cost_per_launch.toLocaleString() }}</p>
        <p><span class="font-semibold">Success Rate:</span> {{ rocket.success_rate_pct }}%</p>
        <p><span class="font-semibold">Country:</span> {{ rocket.country }}</p>
        <p><span class="font-semibold">Company:</span> {{ rocket.company }}</p>
      </div>

      <h3 class="text-lg font-semibold text-gray-800 mt-6">Images</h3>
      <div v-if="rocket.flickr_images.length" class="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
        <img
          v-for="(img, index) in rocket.flickr_images"
          :key="index"
          :src="img"
          alt="Rocket Image"
          class="w-full h-40 object-cover rounded-lg shadow-md"
        />
      </div>

      <p class="mt-6 text-center">
        <a
          :href="rocket.wikipedia"
          target="_blank"
          class="text-blue-500 hover:text-blue-700 font-medium"
        >
          Read more on Wikipedia →
        </a>
      </p>
    </div>
  </div>
</template>

