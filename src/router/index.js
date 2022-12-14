import { createRouter, createWebHistory } from 'vue-router'
import Game from '../components/Game.vue'
import Unlimited from '../components/unlimited/Unlimited.vue'
const routes = [
  {
    path: '/',
    name: 'Game',
    component: Game
  },
  {
    path: '/mode=unlim/:telegram_id',
    name: 'Unlimited',
    component: Unlimited
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router