//Importando Vue-router
import { createRouter, createWebHistory } from 'vue-router'

//Rotas

//Carregamento normal das rotas

import Acupuntura from '@/components/Acupuntura/Acupuntura.vue'
import Auriculoterapia from '@/components/Auriculoterapia/Auriculoterapia.vue'
import AutoConhecimento from '@/components/AutoConhecimento/AutoConhecimento.vue'
import ConeChines from '@/components/ConeChines/ConeChines.vue'
import Home from '@/views/Home/Home.vue'
import Terapias from '@/views/Terapias/Terapias.vue'
import QuickMassagem from '@/components/QuickMassagem/QuickMassagem.vue'
import Ventosas from '@/components/Ventosas/Ventosas.vue'

const routes = [

    {
        path: '/',
        component: Home

    },

    {
        path: '/terapias',
        component: Terapias,
        children: [
            {path: 'acupuntura', component: Acupuntura},
            {path: 'auriculoterapia', component: Auriculoterapia},
            {path: 'auto-conhecimento', component: AutoConhecimento},
            {path: 'cone-chines', component: ConeChines},
            {path: 'quick-massagem', component: QuickMassagem},
            {path: 'ventosas', component: Ventosas}
        ]
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