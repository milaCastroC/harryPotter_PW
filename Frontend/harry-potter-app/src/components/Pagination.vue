<!-- Pagination.vue -->
<template>
    <ul class="pagination">
        <li class="page-item" @click="prevPage" :class="{ disabled: currentPage === 1 }">
            <a class="page-link" href="#"><</a>
        </li>
        <li v-for="page in totalPages" class="page-item" @click="goToPage(page)" :class="{ active: page === currentPage }">
            <a class="page-link" href="#">{{ page }}</a>
        </li>
        <li class="page-item" @click="showAll">
            <a class="page-link" href="#">Mostrar todos</a>
        </li>
        <li class="page-item" @click="nextPage" :class="{ disabled: currentPage === totalPages }">
            <a class="page-link" href="#">></a>
        </li>
    </ul>
</template>
   
<script lang="ts">
import { useCharacterStore } from '@/stores/characterStore';
import { storeToRefs } from 'pinia';
import { defineComponent, onMounted } from 'vue';
   

    export default defineComponent({
        name: 'Pagination',
        setup() {
            const characterStore = useCharacterStore();
            const { currentPage } = storeToRefs(characterStore);
            const { totalPages } = storeToRefs(characterStore)

            const goToPage = (page: number) => {
                characterStore.currentPage = page;
                characterStore.fetchCharacters();
            };

            const prevPage = () => {
                if (currentPage.value > 1) {
                    goToPage(currentPage.value - 1);
                }
            };

            const nextPage = () => {
                if (currentPage.value < totalPages.value) {
                    goToPage(currentPage.value + 1);
                }
            };

            const showAll = () => {
                characterStore.fetchAllCharacters(); 
                characterStore.currentPage = 1; //restablece a la primera página
            };

            return {
                totalPages,
                currentPage,
                goToPage,
                prevPage,
                nextPage,
                showAll,
            };
        }
    })

</script>

<style scoped>

    .pagination{
        display: flex;
        list-style: none;
        padding: 0;
    }

    .page-link {
        font-weight: bold;
        display: block;
        padding: 8px 12px;
        text-decoration: none;
        color: #42b983; /* Vue green */
        background-color: #f2f5f7; /* Soft blue-gray background */
        border: 2px solid#42b983; /* Light border */
        transition: background-color 0.3s, color 0.3s;
    }

    .page-link:hover {
        background-color: #42b983;
        color: #ffffff;
    }

    .page-item.active .page-link {
        background-color: #35495e; /* Vue dark blue */
        color: #ffffff;
        border-color: #35495e;
    }

    .page-item.disabled .page-link {
        color: #cccccc;
        cursor: not-allowed;
    }

</style>