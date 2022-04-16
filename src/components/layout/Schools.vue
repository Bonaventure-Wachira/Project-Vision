<template>
    <div>
        <h2>Predicted schools</h2>
        <div class="container">
            <base-card>
                <div v-if="fetchedSchools">
                    <ul>
                        <li v-for="school in fetchedSchools" :key="school._id">
                            {{ school.name }} : {{ school.level }}
                        </li>
                    </ul>
                </div>
                <h2 v-if="!!errorMessage">{{ errorMessage }}</h2>
            </base-card>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // schools: null,
            errorMessage: null,
        };
    },
    computed: {
        fetchedSchools() {
            return this.$store.getters.getSchools;
        },
    },
    // created() {
    //     console.log(this.$store.getters.getSchools);
    // },
};
</script>

<style scoped>
.container {
    max-width: 90rem;
    margin: 3rem auto;
}
h2 {
    margin: 1.3rem 0;
    font-size: 2.2rem;
}
</style>
