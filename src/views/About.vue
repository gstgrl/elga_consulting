<script setup>
    import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="container">
        
        <div class="text">
            <div class="main-quote">
                Crediamo che ogni opportunità di apprendimento sia un passo avanti verso il nostro potenziale. <br>
                Per questo ci impegniamo a rendere la formazione accessibile a tutti, collaborando con aziende e
                professionisti su misura.
            </div>
        </div>

        <div class="text">
            <div class="main-quote">
                VISION
            </div>
            <h6>
                Aiutare i professionisti a scoprire, valorizzare e trasformare le proprie capacità, per vivere la vita che desiderano.
            </h6>
        </div>

        <div class="text">
            <div class="main-quote">
                MISSION
            </div>
            <h6>
                Garantire il miglior supporto agli imprenditori e ai titolari d’impresa che ambiscono al successo personale e professionale.
            </h6>
        </div>

        <div class="text">
            <div class="main-quote">
                ELGA Consulting S.r.l.
            </div>
        </div>
    </div>
</template>

<style scoped>

    .container {
        margin: 2rem auto;
        background-color: rgba(255, 255, 255, 0.80);
        padding: 0.6rem;
        border-radius: 1rem;

        text-align: center;
    }

    .text {
        margin: 2rem 0;
    }

    .main-quote {
        font-weight: 900;
        font-size: larger;
        margin-bottom: 0.8rem;
    }

    @media (min-width: 576px) {

        .container {
            margin: 5rem auto;
            padding: 3rem;
        }
    }

</style>