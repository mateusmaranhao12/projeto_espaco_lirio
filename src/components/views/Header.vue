<template>
    <nav class="navbar navbar-expand-lg navbar-lirio">
        <div class="container">
            <img class="logo" src="../../../public/img/logo.png">
            <button type="button" class="btn btn-success" @click="entrarEmContato()">
                <i class="fa-brands fa-whatsapp"></i> Entrar em contato
            </button>
        </div>
    </nav>
</template>

<script>

    export default {

        name: 'Header',

        methods: {

            entrarEmContato() {
                window.open('https://wa.me/55557996021217?text=Bom%20dia')
            }

        }

    }
    
</script>

<style lang="scss">
    @import 'Header.scss';
</style>