<template>
    <div class="sidebar">
        <div class="profile">
            <img src="C:\Users\BMS\Downloads\defaultImage.png" alt="">
            <span>{{ fullname }}</span>
        </div>
        <div class="nav">
            <div class="nav-link">
                <router-link to="/"><i class="fa-solid fa-house"></i> Home</router-link>
            </div>
            <div class="nav-link">
                <router-link to="/projects"><i class="fa-solid fa-briefcase"></i> Projetos</router-link>
            </div>
            <div class="nav-link">
                <router-link to="/about"><i class="fa-solid fa-address-card"></i> Sobre mim</router-link>
            </div>
            <div class="nav-link">
                <router-link to="/contacts"><i class="fa-solid fa-address-book"></i> Contato</router-link>
            </div>
            <div class="nav-link">
                <router-link to="/login"><i class="fa-solid fa-door-open"></i> Login</router-link>
            </div>
            <div class="nav-link" v-if="logged">
                <router-link to="/logout"><i class="fa-solid fa-door-closed"></i> Logout</router-link>
            </div>
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
            fullname: 'Nome do Usuário',
            logged: false
        }
    }
}
</script>

<style scoped>
a {
    color: white;
    text-decoration: none;
}

a:hover {
    color: black;
}

.sidebar {
    color: white;
    background: linear-gradient(#9ADB80, #000);
    background-color: #9ADB80;
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
    padding: 0 0 10% 10%;
    display: flex;
    flex-direction: column;
}

.nav-link {
    font-size: 20px;
    margin-bottom: 10px;
    display: block;
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