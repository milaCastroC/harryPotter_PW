<template>
  <div class="character-card">
    <img :src="character?.image" :alt="character?.fullName" />
    <h2>{{ character?.fullName }}({{ character?.nickname }})</h2>
    <p><strong>Casa de Hogwarts: </strong> {{ character?.hogwartsHouse }}</p>
  </div>
</template>

<script lang="ts">

import type { Character } from '@/interfaces/Character';
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
    name: 'CharacterCard',
    props:{
      character:{
        type: Object as PropType<Character>,
        requerid: true,
      }
    },
  })
</script>

<style>

</style>


