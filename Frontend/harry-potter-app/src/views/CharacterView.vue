<template>
    <div class="characters-view">
        <div class = "character-search">
            <SearchBar/>
        </div>
        <CharacterCard 
        v-for = "character in characters"
        :key = "character.index"
        :character = "character"/>

    </div>
</template>

<script lang="ts">
import CharacterCard from '@/components/CharacterCard.vue';
import LoadingScreen from '@/components/LoadingScreen.vue';
import SearchBar from '@/components/SearchBar.vue';
import { useCharacterStore } from '@/stores/characterStore';
import { computed, defineComponent, onMounted } from 'vue';


export default defineComponent({

    name: 'CharacterView',
    components: {CharacterCard, SearchBar, LoadingScreen},
    setup(){
        const characterStore = useCharacterStore();

        onMounted(() =>{
            characterStore.fetchCharacters();
        });

        return {
            characters: computed(() => characterStore.characters),
            loading: computed(() => characterStore.loading),
            error: computed(() => characterStore.error),
        }
    },
    
})
</script>
