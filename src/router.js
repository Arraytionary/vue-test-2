import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Dogs from './views/Dogs'
import Cats from './views/Cats'
import Pet from './views/Pet'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dogs',
      name: 'dogs',
      component: Dogs
    },
    {
      path: '/cats',
      name: 'cats',
      component: Cats
    },
    {
      path: '/pets/:species/:id', //dynamic parameter
      name: 'pet',
      component: Pet
    }
  ]
})
