<template>
    <div v-if="isLoading" class="loading-screen">
      <p>Cargando personajes...</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, computed } from 'vue';
  import { useCharacterStore } from '@/stores/characterStore';
  
  export default defineComponent({
    name: 'LoadingScreen',
    setup() {
      const characterStore = useCharacterStore();
      const isLoading = computed(() => characterStore.loading);
      
      return { isLoading };
    }
  });
  </script>
  
  <style scoped>
  .loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    font-size: 1.5rem;
  }
  </style>
  