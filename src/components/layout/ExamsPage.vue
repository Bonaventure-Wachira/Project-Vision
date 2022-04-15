<template>
    <base-dialog :show="isLoading" fixed title="Fetching exams...">
        <base-spinner v-if="isLoading"></base-spinner>
    </base-dialog>
    <base-dialog
        :show="!!err"
        title="Error occurred while fetching"
        @close="closeErrDialog"
    >
        {{ err }}
    </base-dialog>

    <!-- Add exam dialog box -->
    <base-dialog
        :show="addExamMode"
        title="Add exam to database"
        @close="closeAddExamDialog"
    >
        <div class="subject-group">
            <label for="term">Term</label>
            <input
                type="text"
                name="term"
                placeholder="Term (type 'one', 'two' or 'three')"
                v-model.trim="term"
            />
        </div>
        <div class="subject-group">
            <label for="examName">Exam Name</label>
            <input
                type="text"
                name="examName"
                placeholder="Exam Name (e.g Midterm exam)"
                v-model.trim="examName"
            />
        </div>
        <div class="subject-group">
            <h3>My subjects</h3>
            <div v-for="subject in examArr" :key="subject">
                <span>{{ subject[0] }}</span
                >: <span>{{ subject[1] }}</span>
            </div>
            <span v-if="examTotal"> Total: {{ examTotal }}</span>
        </div>
        <div class="subject-group">
            <input type="text" v-model.trim="subject" placeholder="Subject" />
            <input
                type="number"
                v-model.number="score"
                placeholder="Your score"
            />
            <base-button mode="flat" @click="addSubject"
                >Add subject</base-button
            >
        </div>
        <base-button @click="submit">Submit</base-button>
        <p v-if="!!subjectErr">{{ subjectErr }}</p>
    </base-dialog>
    <div class="general-container">
        <h2 v-if="examCategory" class="exam-page-title">
            My exams for level {{ examCategory.year }}
        </h2>
        <div class="container" v-if="examCategory">
            <exam-card v-for="exam in examCategory.exams" :key="exam._id">
                <div class="card-title">
                    <h2 class="exam-name">{{ exam.examName }}</h2>
                    <span>{{ exam.term }}</span>
                </div>
                <div
                    v-for="(el, index) in Object.entries(exam.exam)"
                    :key="index"
                >
                    {{ el[0] }} : {{ el[1] }}
                </div>
                <base-button
                    mode="outline"
                    @click="fetchSchools(exam.exam.Total)"
                    >Predicted schools</base-button
                >
            </exam-card>
        </div>
        <base-button @click="addExam">Add exam</base-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            err: null,
            subjectErr: null,
            isLoading: false,
            addExamMode: false,
            subject: null,
            score: null,
            examArr: [],
            examTotal: null,
            isLoading: false,
            term: '',
            examName: '',
        };
    },
    computed: {
        examCategory() {
            return this.$store.getters.singleCategory;
        },
    },
    methods: {
        closeErrDialog() {
            this.err = null;
        },
        addExam() {
            this.addExamMode = true;
        },
        addSubject() {
            const subjectArr = [];
            if (!this.subject || !this.score) {
                this.subjectErr =
                    'Put a value in the fields above before  submission';
                return;
            }
            subjectArr.push(this.subject);
            subjectArr.push(this.score);
            this.examArr.push(subjectArr);
            this.examTotal = this.totalScore(this.examArr);
            this.subject = null;
            this.score = null;
        },
        closeAddExamDialog() {
            this.subject = null;
            this.score = null;
            this.examArr = [];
            this.examTotal = null;
            this.term = '';
            this.examName = '';
            this.addExamMode = false;
        },
        totalScore(arr) {
            const scores = arr.map((el) => el[1]);
            const total = scores.reduce(
                (accumulator, curr) => accumulator + curr
            );
            return total;
        },
        async submit() {
            const examObj = this.examArr
                .filter(([k, v]) => {
                    return true; // some irrelevant conditions here
                })
                .reduce((accum, [k, v]) => {
                    accum[k] = v;
                    return accum;
                }, {});
            const exam = {
                ...examObj,
                Total: this.examTotal,
            };

            this.isLoading = true;
            try {
                this.$store.dispatch('addExam', {
                    categoryId: this.$route.params.categoryId,
                    exam,
                    examName: this.examName,
                    term: this.term,
                });
            } catch (error) {
                this.err = error || 'Failed to add exam. Please try again';
            }
            this.$forceUpdate();
            this.isLoading = false;
        },
        async fetchSchools(score) {
            this.isLoading = true;
            try {
                console.log(score);
                this.$store.dispatch('fetchSchools', score);
                this.$router.push('/schools');
            } catch (error) {
                this.err = error || 'Something went wrong';
            }
            this.isLoading = false;
        },
    },
    async created() {
        if (this.$store.getters.isAuth) {
            this.isLoading = true;
            try {
                await this.$store.dispatch(
                    'getSingleCategory',
                    this.$route.params.categoryId
                );
            } catch (err) {
                this.err =
                    err || 'Something went wrong. Please try again later.';
            }
            this.isLoading = false;
        }
    },
};
</script>

<style scoped>
h3 {
    font-size: 1.6rem;
    margin: 1rem 0;
}
.card-title {
    display: inline-flex;
    align-items: center;
}
.exam-name {
    margin-right: 1rem;
}

.general-container {
    margin: 5rem;
}
.container {
    margin: 3rem;
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
}

.exam-page-title {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
}
input {
    display: inline-block;
    width: 100%;
    border: 1px solid #ccc;
    /* font: inherit; */
    font-size: 1.3rem;
    padding: 1rem 1.5rem;
}
label {
    font-size: 1.5rem;
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}
span {
    font-size: 1.3rem;
}
</style>
