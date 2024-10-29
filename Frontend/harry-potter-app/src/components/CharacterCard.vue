<template>
  <div class="character-card">
      <img :src="character.image" :alt="character.fullName" />
      <h2>{{ character.fullName }} ({{ character.nickname }})</h2>
      <p><strong>Casa de Hogwarts: </strong>{{ character.hogwartsHouse }}</p> 
      <p><strong>Interpretado por: </strong>{{ character.interpretedBy }}</p>
      
      <p><strong>Hijos:</strong></p>
      <ul>
          <li v-for="(child, index) in character.children" :key="index">
              {{ child }}
          </li>
      </ul>
      
      <p><strong>Fecha de cumpleaños: </strong>{{ character.birthdate }}</p> 
      <p><strong>Índice: </strong>{{ character.index }}</p>
  </div>
</template>

<script lang="ts">
import type { Character } from '@/interfaces/Character';
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
  name: 'CharacterCard',
  props: {
      character: {
          type: Object as PropType<Character>,
          required: true,
      },
  }
});
</script>

<style scoped>
.character-card {
  border: 2px solid #4B0082;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  max-width: 300px;
  background-color: #2c2c2c;
  color: #f5f5f5;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  transition: transform 0.2s;
  margin: 20px;
}

.character-card:hover {
  transform: scale(1.05);
}

.character-card img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  border: 1px solid #ccc;
}

.character-card h2 {
  margin-top: 12px;
  font-size: 1.5em;
  color: #ffcc00;
}

.character-card p,
.character-card ul {
  margin: 8px 0;
  font-size: 1em;
  color: #f5f5f5;
}

.character-card ul {
  list-style: none;
  padding: 0;
}

.character-card li {
  background-color: #444;
  border-radius: 4px;
  padding: 5px;
  margin: 3px 0;
  color: #f5f5f5;
}
</style>
