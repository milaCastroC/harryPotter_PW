//characterStore.ts
import type { Character } from "@/interfaces/Character";
import { getAllCharacters, getCharacterByIndex, searchCharacterByName } from "@/services/characterService";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCharacterStore = defineStore(
    'characterStore',() =>{
        const characters = ref<Character[]>([]);
        const loading = ref(false);
        const error = ref<string | null>(null);  
        
        const currentPage = ref(1);
        const pageSize = ref(5);
        const totalCharacters = ref(0);
        const totalPages = computed(() => Math.ceil(totalCharacters.value / pageSize.value));
        const isInitialized = ref(false);

        const initialize = async () => {
            if (!isInitialized.value) {
                loading.value = true;
                try {
                    const allCharacters = await getAllCharacters();
                    totalCharacters.value = allCharacters.length;
                    isInitialized.value = true;
                } catch (err) {
                    console.error('Error initializing:', err);
                    error.value = 'Error al inicializar los datos';
                } finally {
                    loading.value = false;
                }
            }
        };

        const fetchCharacters = async () =>{
            loading.value = true;  
            try{
                characters.value = [];
                const newCharacters = [];
                const startIndex = (currentPage.value-1) * pageSize.value + 1;
                const endIndex = Math.min(currentPage.value * pageSize.value, totalCharacters.value-1);  

                for (let i = startIndex; i <= endIndex; i++) {  
                    const character = await getCharacterByIndex(i); 
                    newCharacters.push(character);
                }
                characters.value.push(...newCharacters);
            }catch(err){
                error.value = 'Error al Cargar la Data';
            }finally{
                loading.value = false;
            }
        }

        const fetchAllCharacters = async () => {
            loading.value = true;
            try {
                characters.value = []; 
                const allCharacters = await getAllCharacters(); 
                characters.value.push(...allCharacters); 
                totalCharacters.value = allCharacters.length; 
                currentPage.value = 1; 
            } catch (err) {
                console.error('Error al cargar todos los personajes:', err);
                error.value = 'Error al cargar todos los personajes';
            } finally {
                loading.value = false;
            }
        };

        const searchCharacter = async (name: string) => {
            loading.value = true; 
            try { 
                const response = await searchCharacterByName(name);
                if (response.length > 0) {
                    characters.value = []; // Limpiamos la lista de personajes
                    characters.value.push(...response); // Agregamos los nuevos personajes
                    console.log(characters.value)
                    return response;  
                } else {
                    return null;
                }
            } catch (err) {
                console.error('Error buscando personaje:', error);
                return null;
            } finally {
                loading.value = false;
            }
        };

        return {
            characters, 
            loading,
            error,
            currentPage,
            totalPages,
            initialize,
            fetchCharacters,
            fetchAllCharacters,
            searchCharacter
        }
    }
)
 