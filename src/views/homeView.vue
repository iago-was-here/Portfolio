<script setup>
import Card from '@/components/Card.vue';
</script>
<template>
    <h1 class="p-4 text-center"><b>{{ title }}</b></h1>
    <div class="info-board">
        <Card v-for="info in infos" :key="info.id" :text="info.text" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Bem-vindo à minha página de teste',
            infos: [
                {
                    id: 1,
                    text: 'Teste Info 1'
                },
                {
                    id: 2,
                    text: 'Teste Info 2'
                },
                {
                    id: 3,
                    text: 'Teste Info 3'
                },
                {
                    id: 4,
                    text: 'Teste Info 4'
                },
                {
                    id: 5,
                    text: 'Teste Info 5'
                },
            ]
        }
    }
}
</script>

<style scoped>
.info-board {
    display: flex;
    flex-direction: row;
}
</style>