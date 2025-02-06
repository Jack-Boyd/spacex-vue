<script setup>
  import { useRockets } from '../composables/useRockets';

  const { data: rockets, isLoading, error } = useRockets();
</script>

<template>
  <div>
    <h2>SpaceX Rockets</h2>

    <div v-if="isLoading">Loading...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <ul v-else>
      <li v-for="rocket in rockets" :key="rocket.id">
        <h3>{{ rocket.name }}</h3>
        <p>{{ rocket.description }}</p>
        <p><strong>First Flight:</strong> {{ rocket.first_flight }}</p>
        <p><strong>Country:</strong> {{ rocket.country }}</p>
        <p><strong>Success Rate:</strong> {{ rocket.success_rate_pct }}%</p>
        <img :src="rocket.flickr_images[0]" alt="Rocket Image" width="300" />
      </li>
    </ul>
  </div>
</template>
