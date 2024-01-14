<template>
  <div class="info-card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
  },
};
</script>
<style scoped>
.info-card {
  color: white;
  background: linear-gradient(to right, #0c487a, #010516);
  background-color: #0c487a;
  border: 2px solid gray;
  border-width: thin;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 100%;
  min-height: 10vh;
  margin: 2%;
  padding: 2%;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
}

.info-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  text-shadow: 2px 2px #000;
}
</style>
