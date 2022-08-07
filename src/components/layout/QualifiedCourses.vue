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
            v-else-if="
                qualifiedCourses !== null &&
                    !isLoading &&
                    qualifiedCourses.length > 0
            "
        >
            <h2>Predicted Courses</h2>

            <p class="instructions">
                <strong>NB./</strong> The schools that offer the courses you
                have qualified for will vary based on the marks you got. Kindly
                note that different institutions have different cutoff points
                for certain subjects in order to get a particular course.
            </p>

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
        <div v-if="qualifiedCourses === null && !isLoading" class="not-found">
            <img src="@/Assets/no-application.png" width="150" />
            <div>
                <h3>
                    Unfortunately you do not qualify for any courses for this
                    test.
                </h3>
            </div>
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
        // async fetchCourses() {
        //     const exam = JSON.parse(localStorage.getItem('exam'));

        //     this.isLoading = true;
        //     try {
        //         await this.$store.dispatch('fetchCourses', exam);
        //         this.$store.dispatch('loadUserCourses');
        //     } catch (error) {
        //         this.err = error || 'Something went wrong';
        //         console.log(error);
        //     }
        //     this.isLoading = false;
        // },
    },
    async mounted() {
        // await this.fetchCourses();
        this.qualifiedCourses = this.$store.getters.qualifiedCourses;
    },
};
</script>

<style scoped>
.container {
    max-width: 70vw;
    margin: 3rem auto;
}

.not-found {
    max-width: 70vw;
    margin: 3rem auto;
    text-align: center;
    /* height: 100vh; */
}

h2 {
    margin: 1.3rem 0;
    font-size: 2.2rem;
}
h3 {
    font-size: 1.7rem;
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
.instructions {
    font-size: 1.8rem;
    padding-bottom: 2rem;
}
</style>
