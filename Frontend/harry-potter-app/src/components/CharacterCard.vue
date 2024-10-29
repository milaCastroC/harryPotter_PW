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
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  max-width: 300px;
}

.character-card img {
  width: 100%;
  height: auto;
  border-radius: 5%;
}

.character-card h2 {
  margin-top: 8px;
  font-size: 1.2em;
}

.character-card p,
.character-card ul {
  margin: 8px 0;
  font-size: 1em;
}

.character-card ul {
  list-style: none;
  padding: 0;
}
</style>



