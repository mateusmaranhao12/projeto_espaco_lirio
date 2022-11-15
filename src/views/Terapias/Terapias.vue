<template>
    <div class="destaque-terapias">
        <h2>Tratamentos e Terapias</h2>
    </div>
    <router-view></router-view>
    <div class="container">
        <div class="row">
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div v-for="d in dados" :key="d.id" class="col-md-4">
                    <div class="card text-center" style="margin-bottom: 20px; width: 20rem;">
                        <img :src="`/img/${d.img}`" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">{{d.titulo}}</h5>
                            <p class="card-text">{{d.texto}}</p>
                            <router-link v-if="d.id == 1" to="/terapias/acupuntura" class="btn btn-warning" type="button">Ver mais</router-link>
                            <router-link v-if="d.id == 2" to="/terapias/ventosas" class="btn btn-warning" type="button">Ver mais</router-link>
                            <router-link v-if="d.id == 3" to="/terapias/cone-chines" class="btn btn-warning" type="button">Ver mais</router-link>
                            <router-link v-if="d.id == 4" to="/terapias/quick-massagem" class="btn btn-warning" type="button">Ver mais</router-link>
                            <router-link v-if="d.id == 5" to="/terapias/auriculoterapia" class="btn btn-warning" type="button">Ver mais</router-link>
                            <router-link v-if="d.id == 6" to="/terapias/auto-conhecimento" class="btn btn-warning" type="button">Ver mais</router-link>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>

<script>
    import ApiMixin from '@/mixins/ApiMixins'
    import Footer from '@/components/Footer/Footer.vue'

    export default {
        name: 'Terapias',

        components: {
            Footer
        },

        mixins: [ApiMixin],

        created() {
            this.getDadosApi('http://localhost:3000/terapias')
            this.getDadosApi('https://json-server-vercel-pearl.vercel.app/terapias')
        },

    }
</script>

<style lang="scss">
    @import 'Terapias';
</style>