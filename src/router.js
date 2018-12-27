import VueRouter from 'vue-router'
import Home from './views/Home'
import RecognizePicture from './views/RecognizePicture'
import About from './views/About'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/sobre',
    component: About
  },
  {
    path: '/reconhecer-imagem',
    component: RecognizePicture
  }
]

const router = new VueRouter({
  routes
})

export default router