<script setup>
    import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="container">
        <div class="card" >
            <div class="card-body text-center">
                <h4 class="card-title">“Soltanto una cosa rende impossibile un sogno: <br>
                    la paura di fallire.”</h4>
                <p class="card-text">-Paulo Coelho-</p>
            </div>

            <RouterLink class="btn" to="/form">CONTATTACI</RouterLink>
        </div>
    </div>
</template>

<style scoped>

    .container {
        margin: 2rem auto;
    }

    .card {
        background-color: rgba(255, 255, 255, 0.80);
        margin: 0 auto;
        max-width: 52rem;
        padding: 0.6rem;
        border-radius: 1rem;
    }

    .btn {
        margin-top: 1rem;
        background-color: #C2B590;
        font-weight: bold;
        font-size: larger;
    }

    @media (min-width: 576px) {

        .card-title {
            font-weight: bold;
        }

        .card {
            padding: 3rem;
        }

        .container {
            margin: 5rem auto;
        }
    }

</style>