<script setup>
import { ref, onMounted } from 'vue';

const myInput = ref(null);

onMounted(() => {
  myInput.value.focus();
});
</script>

<template>
  <input ref="myInput" />
</template>

<style scoped>
  
</style>
