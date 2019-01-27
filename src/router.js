import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home'
import ImageClassifier from './views/ImageClassifier'
import About from './views/About'

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    component: About
  },
  {
    path: '/image-classifier',
    component: ImageClassifier
  },
  {
    path: '/',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

export default router
