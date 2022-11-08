<template>
    <section class="home">
        <div class="container">
            <div class="row">
            <div class="col-md-6">
                <img src="../../../public/img/home.jpg" class="img-fluid" />
            </div>
            <div class="col-md-6">
                <h3>Espaço Lírio, saúde e bem estar</h3>
            </div>
        </div>
        </div>
    </section>
    <section class="texto-home">
        <h2>Acupuntura, cone chinês, auriculoterapia, ventosas, quick massagem, curso de autoconhecimento</h2>
    </section>
    <Footer></Footer>
</template>

<script>

    import Footer from '@/components/Footer/Footer.vue'

    export default {
        name: 'Home',
        components: {
            Footer
        }
    }

</script>

<style lang="scss">
    @import 'Home'; 
</style>