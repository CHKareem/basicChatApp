import { createRouter, createWebHistory} from 'vue-router'

import NotFound from '../pages/NotFound.vue'
import chatBoard from '../pages/chatBoard.vue'


const routes = [
    {
        path: '/',
        component: chatBoard,
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound,
    }
]



const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router