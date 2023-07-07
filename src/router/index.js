import { createRouter, createWebHistory } from 'vue-router'
import Weather from '../views/Weather.vue'
import StopWatch from '../views/Stopwatch.vue'
import Location from '../views/Location.vue'
import Photo from '../views/photo.vue'
import TicTac from '../views/TicTac.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'weather',
      component: Weather
    },
    {
      path: '/stopwatch',
      name: 'stopwatch',
      component: StopWatch
    },
    {
      path: '/photo',
      name: 'photo',
      component: Photo
    },
    {
      path: '/location',
      name: 'location',
      component: Location
    },
    {
      path: '/tictac',
      name: 'tictac',
      component: TicTac
    }
  ]
})

export default router
