<script setup>
import { ref } from 'vue';
import Logo from './assets/pngegg.png';
import RefComponent from './components/RefAttribute.vue';
import RefFunction from './components/RefFunction.vue';

const currentView = ref('home');
</script>

<template>
  <header class="header">
    <div class="logo">
      <img :src="Logo" alt="">
    </div>
    <nav class="navbar">
      <ul class="navbar-links">
        <li @click="currentView = 'home'">Home</li>
        <li @click="currentView = 'refAttribute'">Ref Attribute</li>
        <li @click="currentView = 'refFunction'">Ref Function</li>
      </ul>
    </nav>
  </header>

  <main>
    <div v-if="currentView === 'home'">
      <h1>Página Principal</h1>
    </div>

    <RefComponent v-if="currentView === 'refAttribute'" />
    <RefFunction v-if="currentView === 'refFunction'" />
  </main>
</template>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
  }

  .logo {
    display: flex;
    align-items: center;
  }

  .logo img {
    width: 100px;
  }

  .navbar-links {
    display: flex;
    gap: 30px;
    list-style: none;
  }

  li {
    cursor: pointer;
  }
</style>
