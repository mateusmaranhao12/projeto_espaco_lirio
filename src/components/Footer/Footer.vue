<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="redes-sociais">
                        <h5>Redes Sociais</h5>
                        <button @click="getInstagram()" class="btn btn-warning"><i class="fa-brands fa-instagram"></i> Instagram</button>
                        <button @click="getFacebook()" class="btn btn-primary"><i class="fa-brands fa-facebook"></i> Facebook</button>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="contato">
                        <h5>Marque seu horário agora mesmo!</h5>
                        <button @click="getWhatsApp()" class="btn btn-success"><i class="fa-brands fa-whatsapp"></i> Whatsapp</button>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="localizacao ">
                        <h5><i class="fas fa-map-marker-alt"></i> Rua Maria Vasconcelos de Andrade, 980 - Aruana, Aracaju - SE, 49000-000</h5>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.4997439336375!2d-37.0873148850842!3d-11.001081926324009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab05837057823%3A0x109149c988698f7e!2sEspa%C3%A7o%20L%C3%ADrio%20-%20sa%C3%BAde%20e%20bem%20estar!5e0!3m2!1spt-BR!2sbr!4v1667921228236!5m2!1spt-BR!2sbr" width="80%" height="80%" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
    @import 'Footer';
</style>

<script>


    export default {
        name: 'Footer',

        methods: {
            getInstagram() {
                window.open('https://www.instagram.com/espaco_lirio/')
            },

            getFacebook() {
                window.open('https://www.facebook.com/profile.php?id=100068796030537')
            },

            getWhatsApp() {
                window.open('https://www.wa.link/j8d68e')
            }
        }
    }

</script>