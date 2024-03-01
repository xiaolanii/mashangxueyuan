import { createRouter, createWebHashHistory } from 'vue-router'

const Home = ()=> import('../components/Home.vue')
const App = ()=> import('../App.vue')

const routes = [
    { path: '/', redirect: '/home'},
    { path: '/home', component: App }
  ]


const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;