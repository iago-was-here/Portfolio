<template>
  <div class="sidebar">
    <div class="profile">
      <img :src="profileImgUrl" alt="" />
      <span
        ><strong>{{ fullname }}</strong>
      </span>
    </div>
    <div class="nav">
      <router-link to="/" class="nav-link"
        ><i class="fa-solid fa-house"></i> Home</router-link
      >
      <router-link class="nav-link" to="/projects"
        ><i class="fa-solid fa-briefcase"></i> Projetos</router-link
      >
      <router-link class="nav-link" to="/about"
        ><i class="fa-solid fa-address-card"></i> Sobre mim</router-link
      >
      <router-link class="nav-link" to="/contacts"
        ><i class="fa-solid fa-address-book"></i> Contato</router-link
      >
      <router-link class="nav-link" to="/login"
        ><i class="fa-solid fa-door-open"></i> Login</router-link
      >
      <router-link class="nav-link" to="/logout" v-if="logged"
        ><i class="fa-solid fa-door-closed"></i> Logout</router-link
      >
    </div>
    <div class="info">
      <span>&copy 2024 - Desenvolvido por Iago Ananias Silva</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logged: false,
    };
  },
  props: {
    fullname: {
      type: String,
      default: "Nome do Usuário",
    },
    profileImgUrl: {
      type: String,
      default: "#",
    },
  },
};
</script>

<style scoped>
.sidebar {
  color: white;
  background: linear-gradient(to left, #0c3466, #010516);
  background-color: #0c3466;
  width: 20%;
  min-height: 100vh;
}

.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10% 20% 10% 20%;
}

.profile img {
  border: solid 2px #000;
  border-radius: 50%;
  margin-bottom: 10%;
  max-width: 100%;
  width: auto;
  max-height: 100%;
}

.nav {
  margin-left: 2%;
  margin-right: 2%;
  margin-bottom: 20%;
  display: flex;
  flex-direction: column;
}
.nav-link {
  font-size: 20px;
  margin-bottom: 2px;
  display: block;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
  text-decoration: none !important;
  color: white;
}
.nav-link:hover {
  text-shadow: 2px 2px #000;
  background-color: rgba(17, 74, 146, 100);
}

.info {
  text-align: center;
  padding: 2%;
}

@media (max-width: 768px) {
  .profile {
    padding: 5% 10% 5% 10%;
  }

  .nav-link {
    font-size: 16px;
    margin-bottom: 8px;
  }

  .sidebar {
    width: 100%;
    padding: 5% 10% 5% 10%;
  }

  .profile {
    padding: 10% 0 10% 0;
  }

  .nav {
    padding: 0;
  }
}
</style>
