import { createRouter, createWebHashHistory } from 'vue-router'

const Home = () => import('../components/Home.vue')
const App = () => import('../App.vue')
const InfoList = () => import('../components/InfoList.vue')
const Details = () => import('../components/Details.vue')

const routes = [
    { path: '/', redirect: '/home'},
    { path: '/home', component: InfoList },
    { path: '/details/:id', component: Details },

  ]


const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;