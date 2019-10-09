import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home'
import About from './views/About'
import ImageClassifier from './views/ImageClassifier'
import TextSummarizer from './views/TextSummarizer'
import LinearRegression from './views/untrained/LinearRegression'
import UntrainedImageClassifier from './views/untrained/ImageClassifier'

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
    path: '/image-classifier',
    name: 'image-classifier',
    component: ImageClassifier
  },
  {
    path: '/text-summarizer',
    name: 'text-summarizer',
    component: TextSummarizer
  },
  {
    path: '/untrained/linear-regression',
    name: 'linear-regression',
    component: LinearRegression
  },
  {
    path: '/untrained/image-classifier',
    name: 'untrained-image-classifier',
    component: UntrainedImageClassifier
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
