import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios'

axios.defaults.baseURL = 'https://wordlebackapp.herokuapp.com'

createApp(App).use(store).use(router, axios).mount('#app')
