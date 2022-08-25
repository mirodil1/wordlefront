import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios'

axios.defaults.baseURL = 'https://cp.wordlebot.uz'

createApp(App).use(store).use(router, axios).mount('#app')
