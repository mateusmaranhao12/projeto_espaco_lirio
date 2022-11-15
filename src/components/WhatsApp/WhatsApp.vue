<template>
    <section class="secao_whatsapp">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h4 class="text-success d-flex justify-content-center">Marque sua seção agora mesmo!</h4>
                </div>
                <div class="col-md-6 d-flex justify-content-center">
                    <button class="btn btn-success " @click="getWhatsApp()">
                        <i class="fa-brands fa-whatsapp"></i> WhatsApp
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

    export default {
        name: 'BotaoWhatsApp',

        methods: {
            getWhatsApp() {
                window.open('https://www.wa.link/j8d68e')
            }
        }
    }

</script>

<style lang="scss">

    @import '../../variaveis scss/variaveis.scss';

    .secao_whatsapp {
        margin-top: $margins;
        padding: $padding;
        border-top: 1px solid green;
        border-bottom: 1px solid green;

        h4 {
            font-weight: $negrito;
        }
    }

</style>