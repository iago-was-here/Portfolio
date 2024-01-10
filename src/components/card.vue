<template>
    <div class="info-card">
        {{ text }}
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: ''
        },
    }
}
</script>
<style scoped>
.info-card {
    background-color: #CBDEC1;
    border: 2px solid gray;
    border-width: thin;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    width: 100%;
    min-height: 10vh;
    margin: 2%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.info-card:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
</style>