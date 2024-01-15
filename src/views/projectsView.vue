<template>
  <h1 class="main-title">Projetos</h1>
  <hr />
  <div class="repos">
    <div class="repo-info" v-for="repo in userGitRepos" :key="repo.id">
      <Card>
        <h5><strong>Repositório:</strong> {{ repo.name }}</h5>
        <p><strong>Descrição:</strong> {{ repo.description }}</p>
      </Card>
    </div>
  </div>
</template>

<script>
import gitAPi from "@/api/github";
import Card from "@/components/Card.vue";

export default {
  data() {
    return {
      username: "iago-was-here",
      userGitRepos: [
        {
          id: 1,
          name: "Teste 1",
          description: "teste teste teste teste teste teste teste",
        },
        {
          id: 2,
          name: "Teste 2",
          description: "teste teste teste teste teste teste teste",
        },
        {
          id: 3,
          name: "Teste 3",
          description: "teste teste teste teste teste teste teste",
        },
        {
          id: 4,
          name: "Teste 4",
          description: "teste teste teste teste teste teste teste",
        },
      ],
    };
  },
  components: {
    Card,
  },
  // async mounted() {
  //   this.userGitRepos = await gitAPi.getGitUserRepos(this.username);
  //   console.log(this.userGitRepos);
  // },
};
</script>

<style scoped>
.repos {
  margin: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  word-break: break-all;
}

.repo-info {
  display: flex;
  flex-direction: column;
  margin: 2%;
  width: 40%;
}
</style>
