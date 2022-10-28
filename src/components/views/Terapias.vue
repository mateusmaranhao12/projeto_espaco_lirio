<template>
    <section class="caixa secao-acupuntura">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1>Acupuntura e Ventosas</h1>
                </div>
                <div class="col-md-6 mb-3">
                    <img src="../../assets/ventosas.jpg" class="img-fluid">
                </div>
                <div class="col-md-6">
                    <h5>Benefícios da Acupuntura e das ventosas</h5>
                    <ul class="list-group">
                        <li class="list-group-item" v-for="(acupuntura_beneficio, index) in acupuntura_beneficios" :key="index">
                            {{acupuntura_beneficio.acupuntura_beneficio}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <section class="caixa cone-chines">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1>Cone chinês</h1>
                </div>
                <div class="col-md-6">
                    <h5>Benefícios do cone chinês</h5>
                    <ul class="list-group">
                        <li class="list-group-item" v-for="(cone_beneficio, index) in cone_beneficios" :key="index">
                            {{cone_beneficio.cone_beneficio}}
                        </li>
                    </ul>
                </div>
                <div class="col-md-6 mb-3">
                    <img src="../../assets/cone-chines.jpg" class="img-fluid mt-2">
                </div>
            </div>
        </div>
    </section>
</template>

<script>

    export default {

        name: 'Terapias',

        data: () => ({

            acupuntura_beneficios: [
                {acupuntura_beneficio: 'Dores musculares'},
                {acupuntura_beneficio: 'Dores nas costas'},
                {acupuntura_beneficio: 'Dores em geral'},
                {acupuntura_beneficio: 'Enxaqueca'},
                {acupuntura_beneficio: 'Ansiedade'},
                {acupuntura_beneficio: 'Stress'},
                {acupuntura_beneficio: 'Aumentar a imunidade'},
                {acupuntura_beneficio: 'Distúrbios Hormonais'},
                {acupuntura_beneficio: 'Sequelas de AVC'},
                {acupuntura_beneficio: 'Artrite e Artroses'},
                {acupuntura_beneficio: 'Distúrbios diversos'}
            ],

            cone_beneficios: [
                {cone_beneficio: 'Ansiedade'},
                {cone_beneficio: 'Stress'},
                {cone_beneficio: 'Insônia'},
                {cone_beneficio: 'Desânimo'},
                {cone_beneficio: 'Labirintite'},
                {cone_beneficio: 'Dor de ouvido'},
                {cone_beneficio: 'Ouvido entupido'},
                {cone_beneficio: 'Problemas na ATM'},
                {cone_beneficio: 'E muito mais'}
            ]

        }) ,

        components: {
        }
    }

</script>

<style lang="scss">
    @import 'Terapias.scss';
</style>