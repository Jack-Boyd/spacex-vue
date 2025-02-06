<script setup>
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
  <div id="app">
    <header>
      <h1>🚀 SpaceX Rockets</h1>
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </header>

    <main>
      <router-view></router-view>
    </main>

    <footer>
      <p>Made with 🚀 by SpaceX Enthusiasts</p>
    </footer>
  </div>
</template>
