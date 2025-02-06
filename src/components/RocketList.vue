<script setup>
import { useRockets } from '../composables/useRockets';
import { RouterLink } from 'vue-router';

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
        <RouterLink :to="`/rocket/${rocket.id}`">View Details</RouterLink>
      </li>
    </ul>
  </div>
</template>
