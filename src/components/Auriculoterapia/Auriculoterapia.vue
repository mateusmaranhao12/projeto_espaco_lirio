<template>
    <div class="destaque">
        <BotaoExibirMenos class="d-flex justify-content-end"/>
        <h2>Auriculoterapia</h2>
    </div>
    <section class="auriculoterapia">
        <div class="container">
            <div class="row">
                <div class="d-flex justify-content-center col-md-6">
                    <img class="img-fluid" src="../../../public/img/auriculoterapia.jpg" />
                </div>
                <div class="col-md-6">
                    <h3>Benefícios da auriculoterapia</h3>
                    <ul class="list-group">
                        <li v-for="d in dados" :key="d.id" class="list-group-item list-group-item-action">{{d.beneficio}}</li>
                    </ul>
                    <whats-app />
                </div>
            </div>
        </div>
    </section>
</template>

<script>

    import ApiMixin from '@/mixins/ApiMixins'
    import BotaoExibirMenos from '@/components/BotaoExibirMenos/BotaoExibirMenos.vue'
    import WhatsApp from '@/components/WhatsApp/WhatsApp.vue'

    export default {

        name: 'Auriculoterapia',

        components: {
            BotaoExibirMenos,
            WhatsApp
        },

        mixins: [ApiMixin],

        created() {
            this.getDadosApi('http://localhost:3000/beneficios_cone_chines')
            this.getDadosApi('https://json-server-vercel-pearl.vercel.app/beneficios_auriculoterapia')
        },

    }

</script>

<style lang="scss">
    @import 'Auriculoterapia';
</style>