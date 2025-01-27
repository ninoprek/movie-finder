import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/search-result',
    name: 'SearchResult',
    component: () => import('../views/SearchResult.vue'),
    props: true
  },
  {
    path: '/movie-details',
    name: 'Movie',
    component: () => import('../views/Movie.vue'),
    props: true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
