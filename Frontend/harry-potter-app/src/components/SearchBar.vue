<template>
    <div>
    <input 
      type="text" 
      v-model="query" 
      placeholder="Buscar personaje"
      @keyup.enter="searchCharacter" 
    />
    <button @click="searchCharacter">Buscar</button> 
    <p v-if="error">{{ error }}</p>
  </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useCharacterStore } from '@/stores/characterStore';
  
  export default defineComponent({
    name: 'SearchBar',
    setup() {
      const characterStore = useCharacterStore();
      const query = ref('');
      const error = ref('');
  
      const searchCharacter = async () => {
        error.value = '';
        const foundCharacter = await characterStore.searchCharacter(query.value);
        if (foundCharacter == null) {
          error.value = 'Personaje no encontrado';
          characterStore.characters = [];
        }
        query.value = ''; 
      };
  
      return { query, error, searchCharacter };
    },
  });
  </script>

<style scoped>
body {
  font-family: 'Garamond', serif; 
  background-color: #f5f5f5; 
}

div {
  margin-top: 20px; 
}

input {
  margin-right: 10px;
  padding: 10px; 
  border: 2px solid #7f7f7f; 
  border-radius: 4px;
  font-size: 16px; 
  width: 300px;
}

input::placeholder {
  color: #666; 
  font-style: italic; 
}

button {
  padding: 10px 15px; 
  background-color: #8B0000; 
  color: white; 
  border: none; 
  border-radius: 4px; 
  cursor: pointer; 
  font-weight: bold; 
  transition: background-color 0.3s; 
}

button:hover {
  background-color: #f0c040; 
}

p {
  color: #d9534f; 
  font-weight: bold; 
}
</style>

  