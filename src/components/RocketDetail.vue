<script setup>
import { useRocket } from '../composables/useRocket';
import { useRoute } from 'vue-router';

const route = useRoute();
const { data: rocket, isLoading, error } = useRocket(route.params.id);
</script>

<template>
  <div>
    <h2>Rocket Details</h2>

    <div v-if="isLoading">Loading...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <div v-else>
      <h3>{{ rocket.name }}</h3>
      <p><strong>Description:</strong> {{ rocket.description }}</p>
      <p><strong>First Flight:</strong> {{ rocket.first_flight }}</p>
      <p><strong>Cost per Launch:</strong> ${{ rocket.cost_per_launch.toLocaleString() }}</p>
      <p><strong>Success Rate:</strong> {{ rocket.success_rate_pct }}%</p>
      <p><strong>Country:</strong> {{ rocket.country }}</p>
      <p><strong>Company:</strong> {{ rocket.company }}</p>

      <h3>Images</h3>
      <div v-if="rocket.flickr_images.length">
        <img v-for="(img, index) in rocket.flickr_images" :key="index" :src="img" alt="Rocket Image" width="300" />
      </div>

      <p>
        <a :href="rocket.wikipedia" target="_blank">Read more on Wikipedia</a>
      </p>
    </div>
  </div>
</template>
