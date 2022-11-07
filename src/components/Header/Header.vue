<template>
    <header class="bg-navbar">
        <div class="container">
            <div class="row">
                <nav class="navbar navbar-expand-lg navbar-site">
                    <router-link class="navbar-brand" to="/"><img class="img-fluid" src="../../../public/img/logo.png"></router-link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav p-5">
                            <li class="nav-item">
                                <router-link to="/" class="nav-link"><i class="fa-sharp fa-solid fa-house"></i> Home</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/terapias" class="nav-link"> Terapias</router-link>
                            </li>
                        </ul>
                        
                    </div>
                    
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
    export default {}
</script>

<style lang="scss">
    @import 'Header';
</style>