<script setup>
import Sidebar from "@/components/partials/Sidebar.vue";
import Content from "@/components/partials/Content.vue";
</script>

<template>
  <div>
    <div class="app-container">
      <Sidebar :fullname="userInfo.name" :profileImgUrl="userInfo.avatar_url" />
      <div class="content-container">
        <Content />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userInfo: {
      type: Object,
    },
  },
};
</script>
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
