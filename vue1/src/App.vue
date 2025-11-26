<!-- App.vue -->

<script setup>
// Lógica

// Função nativa do vue - ref() - deixa os valores reativos
import { ref } from 'vue';
let product = ref('Galaxy Book 4 Ultra');
let count = ref(0);
const image = 'https://m.media-amazon.com/images/I/41LrMk0BvaL._AC_UF894,1000_QL80_.jpg';
</script>

<template>
<!-- HTML (markup) -->
 <h2>Produto: {{product}}</h2>
 <button @click="count++">Acrescentar</button>
 <button @click="count--">Decrementar</button>
 <h2>Contador: {{ count }}</h2>
 <!-- Renderiza a imagem -->
 <!-- <img v-bind:src="image" alt=""> -->
 <img :src="image" alt="">
</template>

<style scoped>
/* Estilo */
h2 {
  color: #4b82da;
}

img {
  width: 300px;
}
</style>