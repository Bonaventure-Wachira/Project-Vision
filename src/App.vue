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

body {
    background-color: #f5f5f5;
}
</style>
