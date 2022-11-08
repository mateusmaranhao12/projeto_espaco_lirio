<template>
    <section class="home">
        <div class="container">
            <div class="row">
            <div class="col-md-6">
                <img src="../../../public/img/home.jpg" class="img-fluid" />
            </div>
            <div class="col-md-6 d-none d-md-block">
                <h3>Espaço Lírio, saúde e bem estar</h3>
            </div>
        </div>
        </div>
    </section>
    <section class="o-que-temos">
        <h2>O que nós temos</h2>
        <div class="container">
            <div class="row">
                <div v-for="d in dados" :key="d.id" class="col-sm-4">
                    <h5><i class="fa-solid fa-square-check"></i> {{d.item}}</h5>
                </div>
            </div>
        </div>
    </section>
    <Footer></Footer>
</template>

<script>

    import ApiMixin from '@/mixins/ApiMixins'
    import Footer from '@/components/Footer/Footer.vue'

    export default {
        name: 'Home',

        components: {
            Footer
        },

        mixins: [ApiMixin],

        created() {
            this.getDadosApi('http://localhost:3000/o_que_temos')
        },

    }

</script>

<style lang="scss">
    @import 'Home'; 
</style>