import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import AdminUserList from '../views/AdminUserList.vue'
import AdminMovieList from '../views/AdminMovieList.vue'
import MovieList from '../views/MovieList.vue'
import MovieDetail from '../views/MovieDetail.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/admin-user-list',
    name: 'admin-user-list',
    component: AdminUserList
  },
  {
    path: '/admin-movie-list',
    name: 'admin-movie-list',
    component: AdminMovieList
  },
  {
    path: '/movie-list',
    name: 'movie-list',
    component: MovieList
  },
  {
    path: '/movie-detail',
    name: 'movie-detail',
    component: MovieDetail
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router