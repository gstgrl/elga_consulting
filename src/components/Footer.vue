<script setup>
    import { RouterLink } from 'vue-router'

    const copyright_year = new Date().getFullYear()
</script>

<template>
    <div class="container footer">
        <div class="footer-link">
            <img src="../assets/copyright-regular.svg" alt="" height="20" width="20">
            <span class="copyright-year">{{ copyright_year }}</span>
        </div>

        <div class="footer-link">
            <RouterLink to="/" class="link" style="color: #C2B590;"><h5>ELGA s.r.l.</h5></RouterLink>
            <span><h6 style="color: #C2B590;">- P.iva 02139780437</h6></span>
        </div>

        <div class="footer-link">
            <a href="https://linktr.ee/GSTGRL" target="_blank" rel="noopener noreferrer" class="link" style="color: #fff;">GSTGRL</a>
        </div>
    </div>
</template>

<style scoped>
    .footer {
        background-color: #050404;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 1rem;   
        border-radius: 1rem 1rem 0 0; 
    }

    .footer-link {
        display: flex;
        flex-direction: row;
        align-items: center;
        opacity: 0.5;
        cursor: pointer;
    }
    .footer-link:hover {
        opacity: 1;
    }

    .link {
        text-decoration: none;
    }
    .link:hover {
        text-decoration: underline;
    }

    .copyright-year {
        margin-left: 0.5rem;
        color: #C2B590;
    }

    a, h5, h6, span {
        font-size: 0.7rem;
        margin: 0;
    }

    @media (min-width: 576px) {

        a, h5, h6, span {
            font-size: 1rem;
        }
    }
</style>