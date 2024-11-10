<script setup>
    import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="container">
        <RouterLink to="/" class="navbar-brand">
            <img src="../assets/LOGO_ELGA.jpg" alt="ELGA Logo" width="100" height="100" class="border-custom">
        </RouterLink>

        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">

                <button class="navbar-toggler" type="button" @click="manageHamburgerMenu">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarToggler" style="margin-left: 5rem;" :class="{'show': hamburgerState}">
                    <div class="navbar-nav" :class="{'custom-nav-link': !hamburgerState}">
                        <RouterLink class="nav-link"  aria-current="page" to="/about" style="color: #C2B590;"><h5>ABOUT</h5></RouterLink>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<style scoped>
    h5 {
        margin: 0;
    }

    .container {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .custom-nav-link {
        background-color: rgba(255, 255, 255, 0.80);
        border-radius: 1rem;
    }

    .border-custom {
        border-radius: 1.2rem;
    }
</style>

<script>

    export default {
        methods: {
            manageHamburgerMenu() {
                this.hamburgerState = !this.hamburgerState
            }
        },
        data() {
            return {
                hamburgerState: false
            }
        }
    }

</script>