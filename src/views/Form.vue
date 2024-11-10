<script setup>
    import {setCookie, getCookie} from "../javascript/cookies"
</script>


<template>
    <div class="container">
        <form  @submit.prevent="submitForm">
            <div class="input-group mb-3">
                <input type="text" aria-label="First name" class="form-control" placeholder="NOME" required v-model="formData.name">
            </div>

            <div class="input-group mb-3">
                <input type="text" aria-label="Last name" class="form-control" placeholder="COGNOME" required v-model="formData.surname">
            </div>

            <div class="input-group mb-3">
                <input type="text" class="form-control" aria-label="Email" aria-describedby="basic-addon1" placeholder="EMAIL" required v-model="formData.email">
            </div>

            <div class="input-group mb-3">
                <input type="phone" class="form-control" aria-label="Telefono" aria-describedby="basic-addon1" placeholder="TELEFONO" required v-model="formData.number">
            </div>

            <div class="input-group mb-3">
                <input type="text" class="form-control" aria-label="Ruolo-aziendale" aria-describedby="basic-addon1" placeholder="RUOLO AZIENDALE" required v-model="formData.company_role">
            </div>

            <div class="input-group mb-3">
                <textarea class="form-control" placeholder="SCRIVI QUALCOSA SU DI TE..." aria-label="Message" aria-describedby="basic-addon1" required v-model="formData.message"></textarea>
            </div>

            <div class="privacy-policy-container mb-3">
                <input class=" mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" id="privacy_policy_checkbox" disabled required>
                <h6 class="smaller_text"><a style="color: #c2b590;" class="hover" @click="privacyPolicyViewed">Privacy Policy</a></h6>
            </div>

            <button type="submit" class="btn">INVIA</button>
        </form>
    </div>
</template>

<style scoped>
    h6 {
        margin: 0;
    }

    .container {
        margin: 2rem auto;
        background-color: rgba(255, 255, 255, 0.80);
        padding: 0.6rem;
        border-radius: 1rem;
        max-width: 700px;
    }

    ::placeholder {
        font-size: 0.5rem
    }

    .privacy-policy-container {
        display: flex;
        flex-direction: row;
    }

    .btn {
        width: 100%;
        background-color: #c2b590;
    }

    @media (min-width: 576px) {

        ::placeholder {
            font-size: 1rem
        }
    }
</style>

<script>
    import axios from 'axios';

    export default {
        mounted() {
            if(getCookie("Privacy Policy Read")) {
                document.querySelector("#privacy_policy_checkbox").disabled = false
            }
        },
        data() {
            return {
                formData: {
                    name: '',
                    surname: '',
                    email: '',
                    number: '',
                    company_role: '',
                    message: ''
                }
            };
        },
        methods: {
            async submitForm() {
                try {
                    //console.log(this.formData)
                    this.$router.replace('/thanks');
                    //const response = await axios.post('http://127.0.0.1:5000/send-email', this.formData)
                    const response = await axios.post('https://backend-decentralizzato.fly.dev/send-email', this.formData) //For debug 
                    console.log(response)
                    //alert('Email inviata con successo!');
                } catch (error) {
                    console.error('Errore durante l\'invio dell\'email:', error);
                    alert('Errore durante l\'invio.');
                }
            },
            privacyPolicyViewed: function() {
                setCookie("Privacy Policy Read", true, 1)
                document.querySelector("#privacy_policy_checkbox").disabled = false
            }
        }
    }
</script>