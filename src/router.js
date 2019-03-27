import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home'
import About from './views/About'
import ImageClassifier from './views/ImageClassifier'
import TextSummarizer from './views/TextSummarizer'

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
    path: '/text-summarizer',
    component: TextSummarizer
  },
  {
    path: '/',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
