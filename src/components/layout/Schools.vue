<template>
    <div>
        <div class="container">
            <base-card>
                <div v-if="fetchedSchools">
                    <ul class="school-list">
                        <h2 class="list-title">Predicted Schools</h2>
                        <li
                            v-for="school in fetchedSchools"
                            :key="school._id"
                            class="school-object"
                        >
                            <span class="school-property">{{
                                school.name
                            }}</span>
                            <span class="school-property">{{
                                school.type
                            }}</span>
                            <span class="school-property">{{
                                school.county
                            }}</span>
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
.school-list {
    list-style: none;
    padding: 2rem;
}
.school-object {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 1rem;
}

.school-property {
    font-size: 1.6rem;
    margin-right: 10%;
}
.list-title {
    font-size: 2rem;
    margin-bottom: 1rem;
}
</style>
