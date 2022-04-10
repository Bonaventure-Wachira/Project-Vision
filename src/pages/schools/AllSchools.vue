<template>
    <base-spinner v-if="isLoading"></base-spinner>
    <div class="container">
        <base-button mode="outline" @click="getAllSchools(true)"
            >Refresh</base-button
        >
        <base-card>
            <div v-if="allSchools">
                <ul>
                    <li v-for="school in allSchools" :key="school._id">
                        {{ school.name }} : {{ school.level }}
                    </li>
                </ul>
            </div>
            <h2 v-if="!!errorMessage">{{ errorMessage }}</h2>
        </base-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isLoading: false,
            errorMessage: null,
        };
    },
    computed: {
        allSchools() {
            return this.$store.getters.getAllSchools;
        },
    },
    methods: {
        async getAllSchools(refresh = false) {
            this.isLoading = true;
            try {
                await this.$store.dispatch('getAllSchools', {
                    forceRefresh: refresh,
                });
            } catch (err) {
                this.errorMessage = err || 'Something went wrong';
            }
            this.isLoading = false;
        },
    },
    created() {
        this.getAllSchools();
    },
};
</script>

<style scoped>
.container {
    max-width: 90rem;
    margin: 3rem auto;
}
</style>
