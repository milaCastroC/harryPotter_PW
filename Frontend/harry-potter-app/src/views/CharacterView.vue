<!-- CharacterView.vue -->
<template>
    <div class="characters-view" >
        <div class = "character-search">
            <SearchBar/>
        </div>
        <div class="loading">
            <LoadingScreen/>
        </div>
        <div class="characters-container">
            <CharacterCard 
            v-for = "character in characters"
            :key = "character.index"
            :character = "character"/>
        </div>
         
        <div class="pagination">   
            <Pagination    
            :current-page="currentPage"
            :total-pages="totalPages"
            />
        </div>

    </div>
</template>

<script lang="ts">
import CharacterCard from '@/components/CharacterCard.vue';
import LoadingScreen from '@/components/LoadingScreen.vue';
import Pagination from '@/components/Pagination.vue';
import SearchBar from '@/components/SearchBar.vue';
import { useCharacterStore } from '@/stores/characterStore';
import { computed, defineComponent, onMounted } from 'vue';


export default defineComponent({

    name: 'CharacterView',
    components: {CharacterCard, SearchBar, LoadingScreen, Pagination},
    setup(){
        const characterStore = useCharacterStore();


        onMounted(async () => {
            await characterStore.initialize(); // Inicializar el store
            await characterStore.fetchCharacters(); 
        });   

        return {
            characters: computed(() => characterStore.characters),
            loading: computed(() => characterStore.loading),
            error: computed(() => characterStore.error),
            currentPage: computed(() => characterStore.currentPage),
            totalPages: computed(() => characterStore.totalPages), 
        }
    },
    
})
</script>

<style scoped>

.characters-container{
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.character-search{
    display: flex;
    justify-content: center;
}
</style>
