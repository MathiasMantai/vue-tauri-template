import Dashboard from '../views/Dashboard.vue'
import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Dashboard
        }
    ]
})