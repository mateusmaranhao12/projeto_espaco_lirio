<template>
    <div class="destaque">
        <BotaoExibirMenos class="d-flex justify-content-end"/>
        <h2>Quick Massagem</h2>
    </div>
    <section class="quick-massagem">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h3>Benefícios da quick massagem</h3>
                    <ul class="list-group">
                        <li v-for="d in dados" :key="d.id" class="list-group-item list-group-item-action">{{d.beneficio}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

    import ApiMixin from '@/mixins/ApiMixins'
    import BotaoExibirMenos from '@/components/BotaoExibirMenos/BotaoExibirMenos.vue'

    export default {

        name: 'QuickMassagem',

        components: {
            BotaoExibirMenos
        },

        mixins: [ApiMixin],

        created() {
            this.getDadosApi('http://localhost:3000/beneficios_quick_massagem')
            this.getDadosApi('https://json-server-vercel-pearl.vercel.app/beneficios_quick_massagem')
        },

    }

</script>

<style lang="scss">
    @import 'QuickMassagem';
</style>