<template>
    <div class="characters-view">
        <CharacterCard 
        v-for = "character in characters"
        :key = "character.index"
        :character = "character"/>

    </div>
</template>

<script lang="ts">
import CharacterCard from '@/components/CharacterCard.vue';
import { useCharacterStore } from '@/stores/characterStore';
import { defineComponent, onMounted } from 'vue';


export default defineComponent({

    name: 'CharacterView',
    components: {CharacterCard},
    setup(){
        const characterStore = useCharacterStore();

        onMounted(() =>{
            characterStore.fetchCharacters();
        });

        return {
            ...characterStore
        }
    }
})
</script>
