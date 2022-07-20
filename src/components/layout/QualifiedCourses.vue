<template>
    <div>
        <base-dialog
            :show="isLoading"
            fixed
            title="Fetching ..."
            v-if="isLoading"
        >
            <base-spinner v-if="isLoading"></base-spinner>
        </base-dialog>
        <base-dialog
            v-else-if="!isLoading && !!err"
            :show="!!err"
            title="Error occurred while fetching"
            @close="closeErrDialog"
        >
            {{ err }}
        </base-dialog>
        <div
            class="container"
            v-else-if="!isLoading && qualifiedCourses.length > 0"
        >
            <h2>Predicted Courses</h2>
            <ul>
                <li
                    v-for="(course, index) in qualifiedCourses"
                    :key="course._id"
                >
                    <div>
                        <span> {{ index + 1 }}.</span>
                        <span class="course-name">{{ course.name }}</span>
                    </div>
                    <base-button mode="flat" @click="learnMore(course._id)"
                        >Learn More</base-button
                    >
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            qualifiedCourses: [],
            isLoading: false,
            err: null,
        };
    },
    methods: {
        learnMore(courseId) {
            this.$router.push('/qualifiedcourses/' + courseId);
        },
        async fetchCourses() {
            const exam = JSON.parse(localStorage.getItem('exam'));

            this.isLoading = true;
            try {
                await this.$store.dispatch('fetchCourses', exam);
                this.$store.dispatch('loadUserCourses');
            } catch (error) {
                this.err = error || 'Something went wrong';
                console.log(error);
            }
            this.isLoading = false;
        },
    },
    async mounted() {
        await this.fetchCourses();
        this.qualifiedCourses = this.$store.getters.qualifiedCourses;
    },
};
</script>

<style scoped>
.container {
    max-width: 70vw;
    margin: 3rem auto;
}

h2 {
    margin: 1.3rem 0;
    font-size: 2.2rem;
}

ul {
    list-style: none;
    font-size: 1.4rem;
}

li {
    text-transform: capitalize;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
