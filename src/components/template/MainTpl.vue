<script setup>
import Sidebar from '../partials/Sidebar.vue';
import Content from '../partials/Content.vue';
</script>

<template>
    <div>
        <div class="app-container">
            <Sidebar />
            <div class="content-container">
                <Content />
            </div>
        </div>
    </div>
</template>

<style scoped>
.app-container {
    width: 100%;
    display: flex;
}

.content-container {
    flex: 1;
    display: flex;
    justify-content: center;
}
</style>