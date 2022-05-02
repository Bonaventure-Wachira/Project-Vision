<template>
    <base-dialog :show="isLoading" fixed title="Fetching schools...">
        <base-spinner v-if="isLoading"></base-spinner>
    </base-dialog>
    <base-dialog :show="!!err" title="An error occured" @close="closeErrBox">
        <p>{{ err }}</p>
    </base-dialog>
    <base-card>
        <ul class="school-list">
            <h2 class="list-title">National Schools</h2>
            <li
                v-for="school in schools"
                :key="school._id"
                class="school-object"
            >
                <span class="school-property">{{ school.name }}</span>
                <span class="school-property">{{ school.type }}</span>
                <!-- <span class="school-property">{{ school.county }}</span> -->
            </li>
        </ul>
    </base-card>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            err: null,
            schools: null,
            isLoading: false,
        };
    },
    methods: {
        async loadSchools() {
            this.isLoading = true;
            const response = await axios.get(
                'https://project-v-api.herokuapp.com/api/v1/schools/nationals'
            );

            if (response.status !== 200) {
                this.err = 'Something went Wrong Please try again.';
                console.log(response);
            }
            this.schools = response.data.data.schools;
            this.isLoading = false;
        },
        closeErrBox() {
            this.err = null;
        },
    },
    created() {
        this.loadSchools();
    },
};
</script>

<style scoped>
.school-list {
    list-style: none;
    padding: 2rem;
}
.school-object {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
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
