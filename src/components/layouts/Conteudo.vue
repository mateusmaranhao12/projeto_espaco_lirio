<template>
    <terapias></terapias>
    <valores></valores>
</template>

<script>

    import Terapias from '@/components/views/Terapias.vue'
    import Valores from '@/components/views/Valores.vue'

    export default {

        name: 'Conteudo',

        components: {
            Terapias,
            Valores
        }
    }

</script>

<style>
    body {
        background: rgb(233, 233, 233);
    }
</style>