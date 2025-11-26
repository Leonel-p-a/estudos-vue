<script setup>
import { ref } from 'vue';

import atlxflaImg from '../assets/Pulgar-Flamengo-Atletico-MG-scaled-aspect-ratio-512-320.webp';

const likes = ref(0);
const comment = ref('');
const commentsList = ref([]);
</script>

<template>
  <h2>Feed</h2>
  <section class="post">
    <img :src="atlxflaImg" alt="Pulgar do Flamengo disputando cabeçada com jogadores do Atlético">
    <div class="likes-field">
      <button @click="likes++">Curtir 👍</button>
      <span>Curtidas: {{ likes }}</span>

      <span v-if="likes >= 10">Esse post está ficando popular!</span>
    </div>

    <!-- v-show remove ou esconde o HTML -->
    <div>
      <h4>Comentários:</h4>
      <!-- v-model faz a ligação entre o inout e a variável de texto -->
      <input v-model="comment" type="text">
      <button @click="commentsList.push(comment)">Enviar</button>
      <!-- v-for percorre um array -->
      <p v-for="(comment, i) in commentsList" :key="i">
        {{ comment }}
      </p>
    </div>
  </section>
</template>

<style scoped>
img {
  width: 30vw;
  max-width: 500px;
}

div.likes-field {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
