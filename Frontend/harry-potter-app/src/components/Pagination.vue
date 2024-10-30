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
.pagination {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 20px 0; 
}

.page-link {
    font-weight: bold;
    display: block;
    padding: 10px 15px;
    text-decoration: none;
    color: #f0c040; 
    background-color: #4b2c20;
    border: 2px solid #f0c040; 
    border-radius: 5px; 
    transition: background-color 0.3s, color 0.3s, transform 0.2s; 
}

.page-link:hover {
    background-color: #f0c040; 
    color: #4b2c20; 
    transform: scale(1.05);
}

.page-item.active .page-link {
    background-color: #8b0000; 
    color: #ffffff;
    border-color: #8b0000;
}

.page-item {
    margin: 0 5px;
}

.page-item:hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); 
}

.page-item.disabled .page-link {
        color: #cccccc;
        cursor: not-allowed;
    }

</style>
