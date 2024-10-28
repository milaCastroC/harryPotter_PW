<template>
    <div>
    <input 
      type="text" 
      v-model="query" 
      placeholder="Buscar personaje" 
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
input {  
  margin-right: 10px; /* Espacio entre el input y el botón */
}

button {
  padding: 5px 10px; /* Tamaño del botón */
  background-color: #4CAF50; /* Color de fondo */
  color: white; /* Color del texto */
  border: none; /* Sin borde */
  border-radius: 4px; /* Bordes redondeados */
  cursor: pointer; /* Cambia el cursor al pasar el ratón */
}

button:hover {
  background-color: #45a049; /* Color de fondo al pasar el ratón */
}
</style>
  