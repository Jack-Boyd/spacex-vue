<script setup>
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
  <div id="app" class="bg-gray-100">
    <header class="flex justify-between items-center py-4 px-4 sm:px-15 md:px-17 lg:px-23 xl:px-46">
      <RouterLink to="/"><h1 class="text-2xl font-bold">🚀 SpaceX Rockets</h1></RouterLink>
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </header>

    <main class="px-4 sm:px-15 md:px-17 lg:px-23 xl:px-46">
      <router-view></router-view>
    </main>

    <footer class="py-8">
      <p class="text-center">Made with 🚀 by Jack Boyd</p>
    </footer>
  </div>
</template>
