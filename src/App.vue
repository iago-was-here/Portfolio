<script setup>
import MainTpl from "@/components/template/MainTpl.vue";
</script>

<template>
  <main>
    <MainTpl :userInfo="userGitInfo" />
  </main>
</template>

<script>
import gitAPi from "@/api/github";

export default {
  data() {
    return {
      username: "iago-was-here",
      userGitInfo: {
        name: "Iago Ananias Silva",
        avatar_url: "",
      },
    };
  },
  // async mounted() {
  //   this.userGitInfo = await gitAPi.getGitUserInfo(this.username);
  //   console.log(this.userGitInfo);
  // },
};
</script>
