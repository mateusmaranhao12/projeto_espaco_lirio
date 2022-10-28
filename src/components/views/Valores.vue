<template>
    <section class="valores caixa">
        <h1>Preços das Terapias</h1>
        <div class="container">
            <div class="row">
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col" v-for="(precos_terapias, index) in precos_terapias" :key="index">
                        <div class="card">
                            <div class="card-header bg-warning">
                                <h5 class="mt-2">{{precos_terapias.terapia}}</h5>
                            </div>
                            <div class="card-body">
                                <p class="card-text">Preço: {{precos_terapias.preco}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

    export default {

        name: 'Valores',

        data: () => ({

            precos_terapias: [
                {
                    terapia: 'Cone Chinês',
                    preco: 'R$40,00'
                },

                {
                    terapia: 'Acupuntura',
                    preco: 'R$70,00'
                },

                {
                    terapia: 'Ventosas',
                    preco: 'R$40,00'
                },

                {
                    terapia: 'Aromoterapia',
                    preco: 'A partir de R$60,00'
                }
            ]

        })

    }

</script>

<style lang="scss">
    @import 'Valores.scss';
</style>