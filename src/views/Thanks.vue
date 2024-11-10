<script setup>
    import { RouterLink } from 'vue-router'
</script>

<template> 
    <div class="container">
        <div class="greetings">
            <h4>Grazie per averci contattato !</h4>
        </div>
        <div class="home-button">
            <RouterLink to="/" class="btn">Torna alla Home</RouterLink>
        </div>
    </div>
</template>

<style scoped>
    h6 {
        margin: 0;
    }

    .container {
        margin: 2rem auto;
        background-color: rgba(255, 255, 255, 0.80);
        padding: 3rem 1rem;
        border-radius: 1rem;
        max-width: 700px;
        text-align: center;
    }

    ::placeholder {
        font-size: 0.5rem
    }

    .privacy-policy-container {
        display: flex;
        flex-direction: row;
    }

    @media (min-width: 576px) {

        ::placeholder {
            font-size: 1rem
        }
    }
</style>