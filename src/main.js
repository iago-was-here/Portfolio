import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import Router from './router/index.js'


createApp(App).use(Router).mount('#app')