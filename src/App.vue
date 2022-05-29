<template>
    <the-header></the-header>
    <router-view />
</template>
<script>
import TheHeader from './components/layout/TheHeader.vue';
export default {
    components: {
        TheHeader,
    },
    methods: {
        tryLogin() {
            this.$store.dispatch('tryLogin');
        },
        async fetchUser() {
            await this.$store.dispatch('fetchUser');
        },
    },
    async mounted() {
        this.tryLogin();
    },
};
</script>

<style>
*,
*::after,
*::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    font-size: 62.5%;
}

@media only screen and (max-width: 800px) {
    html {
        font-size: 50%;
    }
}

@media only screen and (max-width: 600px) {
    html {
        font-size: 43.75%;
    }
}

@media only screen and (max-width: 510px) {
    html {
        font-size: 37.5%;
    }
}

body {
    background-color: #f5f5f5;
}
</style>
