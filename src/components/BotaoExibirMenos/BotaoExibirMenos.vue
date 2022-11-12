<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <button class="btn btn-warning" @click="this.$router.push('/terapias')">
                    <span><i class="fa-solid fa-x"></i> Fechar</span>
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .btn-warning {
        span {
            font-weight: 900;
            color: white;
        }
    }
</style>