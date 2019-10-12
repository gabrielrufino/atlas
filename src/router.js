import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home'
import About from './views/About'
import MobileNetClassifier from './views/MobileNetClassifier'
import TextSummarizer from './views/TextSummarizer'
import LinearRegression from './views/LinearRegression'
import ImageClassifier from './views/ImageClassifier'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/mobile-net-classifier',
    name: 'mobile-net-classifier',
    component: MobileNetClassifier
  },
  {
    path: '/text-summarizer',
    name: 'text-summarizer',
    component: TextSummarizer
  },
  {
    path: '/linear-regression',
    name: 'linear-regression',
    component: LinearRegression
  },
  {
    path: '/image-classifier',
    name: 'image-classifier',
    component: ImageClassifier
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
