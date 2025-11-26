<script setup>
import { ref } from 'vue';

const contador = ref(0);
const texto = ref('Olá');

function incrementar() {
  contador.value++;
}
</script>

<template>
    <h2>{{ texto }}</h2>
    <button @click="incrementar">Clique aqui</button>
    <p>Você clicou {{ contador }} vezes</p>
</template>

<style scoped>
  
</style>
