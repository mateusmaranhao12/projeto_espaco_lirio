//Importando Vue-router
import { createRouter, createWebHistory } from 'vue-router'

//Rotas

//Carregamento normal das rotas

import Home from '@/views/Home/Home.vue'
import Terapias from '@/views/Terapias/Terapias.vue'

const routes = [

    {
        path: '/',
        component: Home

    },

    {
        path: '/terapias',
        component: Terapias
    }

]

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        //return { left: 0, top: 150 } //left = eixo x, top = eixo y

        if (savedPosition) {
            return savedPosition
        }

        if (to.hash) {
            return { el: to.hash } //to.hash deve corresponder a um Id de elemento Html
        }

        return { left: 0, top: 0 }
    },
    routes //routes: routes
})

export default router