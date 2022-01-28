<template>
    <button v-if="!link" :class="mode">
        <slot></slot>
    </button>
    <router-link :to="to" v-else :class="mode">
        <slot></slot>
    </router-link>
</template>

<script>
export default {
    props: {
        mode: {
            type: String,
            required: false,
            default: null,
        },
        link: {
            type: Boolean,
            required: false,
            default: false,
        },
        to: {
            type: String,
            required: false,
            default: '/',
        },
    },
};
</script>

<style scoped>
button,
a {
    text-decoration: none;
    padding: 0.5rem 1rem;
    font: inherit;
    background-color: #1572a1;
    border: 1px solid #1572a1;
    color: white;
    cursor: pointer;
    border-radius: 10px;
    margin-right: 0.5rem;
    display: inline-block;
    font-size: 0.9rem;
}

a:hover,
a:active,
button:hover,
button:active {
    background-color: #9ad0ec;
    border-color: #9ad0ec;
    color: black;
    outline: none;
}

.flat {
    background-color: transparent;
    color: #3a0061;
    border: none;
}

.outline {
    background-color: transparent;
    border-color: #270041;
    color: #270041;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
    background-color: #edd2ff;
}
</style>
