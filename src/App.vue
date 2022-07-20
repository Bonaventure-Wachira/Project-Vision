<template>
    <the-header></the-header>
    <!-- <router-view /> -->
    <router-view v-slot="slotProps">
        <transition name="route" mode="out-in">
            <component :is="slotProps.Component"></component>
        </transition>
    </router-view>
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
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

*,
*::after,
*::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    font-family: 'Roboto', sans-serif;
    font-size: 62.5%;
}
.route-leave-to {
    opacity: 1;
    transform: translateY(30px);
}

.route-enter-from {
    opacity: 0;
    transform: translateY(-30px);
}

.route-enter-to,
.route-leave-from {
    opacity: 1;
    transform: translateY(0);
}

.route-enter-active {
    transition: all 0.3s ease-out;
}
.route-leave-active {
    transition: all 0.3s ease-in;
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
