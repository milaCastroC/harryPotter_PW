import type { Character } from "@/interfaces/Character";
import { getCharacterByIndex } from "@/services/characterService";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useCharacterStore = defineStore(
    'characterStore',() =>{
        const characters = ref<Character[]>([]);
        const loading = ref(false);
        const error = ref<string | null>(null);
        
        const currentPage = ref(1);
        const pageSize = ref(5);

        const fetchCharacters = async () =>{
            loading.value = true;
            try{
                const newCharacters = [];
                const startIndex = (currentPage.value-1) * pageSize.value + 1;
                const endIndex = currentPage.value * pageSize.value;

                for (let i = startIndex; i <= endIndex; i++) {
                    const character = await getCharacterByIndex(i);
                    newCharacters.push(character);
                }

                characters.value.push(...newCharacters);
                currentPage.value++;
            }catch(err){
                error.value = 'Error al Cargar la Data'
            }finally{
                loading.value = false;
            }
        }

        return {
            characters,
            loading,
            error,
            currentPage,
            fetchCharacters
        }
    }
)