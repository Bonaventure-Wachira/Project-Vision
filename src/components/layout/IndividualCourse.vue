<template>
    <div class="container">
        <div v-if="course">
            <h2>{{ course.name }}</h2>
            <p class="description">{{ course.description }}</p>
            <span class="duration">{{
                'Duration: ' + course.duration + ' years'
            }}</span>

            <h3>Some of the units in the course include:</h3>
            <ul>
                <li v-for="(unit, index) in course.units" :key="index">
                    <span>{{ index + 1 }}</span
                    >:
                    <span> {{ ' ' + unit }}</span>
                </li>
            </ul>

            <h3>Possible career paths for this course include:</h3>
            <ul>
                <li v-for="(path, index) in course.pathways" :key="index">
                    <span>{{ index + 1 }}</span
                    >:
                    <span> {{ ' ' + path }}</span>
                </li>
            </ul>
        </div>
        <div v-else-if="!course">
            <p>There was a problem fetching the course</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            course: null,
        };
    },
    methods: {
        singleCourse() {
            let course = null;
            const courses = JSON.parse(
                localStorage.getItem('qualifiedCourses')
            );
            const currentId = this.$route.params.courseId;

            courses.forEach((el) => {
                if (el._id === currentId) {
                    course = el;
                }
            });
            return course;
        },
    },
    mounted() {
        this.course = this.singleCourse();
    },
};
</script>

<style scoped>
.container {
    max-width: 70vw;
    margin: 3rem auto;
}

.duration {
    display: block;
    margin: 1rem 0;
    font-size: 1.8rem;
    font-weight: bold;
}

.description {
    font-size: 1.4rem;
}

h2 {
    margin: 1.3rem 0;
    font-size: 2.2rem;
}

h3 {
    font-size: 1.8rem;
    margin: 1rem 0;
}

ul {
    list-style: none;
    font-size: 1.4rem;
}
li {
    margin-bottom: 1rem;
}
</style>
