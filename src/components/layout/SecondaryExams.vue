<template>
    <base-dialog :show="isLoading" fixed title="Fetching ...">
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
            <select name="term" id="term" v-model.trim="term">
                <option value="one">One</option>
                <option value="two">Two</option>
                <option value="three">Three</option>
            </select>
        </div>
        <div class="subject-group">
            <label for="examName">Exam Name</label>
            <input
                type="text"
                name="examName"
                placeholder="Exam Name (e.g Midterm exam)"
                v-model.trim="examName"
                @keydown="closeSubjectErr"
            />
        </div>
        <div class="subject-group">
            <h3>My subjects</h3>
            <ul>
                <li
                    v-for="(subject, index) in mySubjects"
                    :key="index"
                    class="subject-item"
                >
                    <label for="subject">{{ subject.subject }}</label>
                    <input
                        type="number"
                        name="subject"
                        v-model.number="subject.value"
                        placeholder="Your score"
                        @focus="addScore"
                        @keydown.tab="addScore"
                        @keydown.enter="addScore"
                    />
                </li>
            </ul>
            <span v-if="examTotal"> Total: {{ examTotal }}</span>
        </div>
        <base-button @click="submit">Submit</base-button>
        <p v-if="!!subjectErr" class="subject-err">{{ subjectErr }}</p>
    </base-dialog>

    <!-- General container -->
    <div class="general-container" v-if="!isLoading">
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
import axios from 'axios';
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
            term: 'one',
            examName: '',
            examCategory: null,
            mySubjects: [
                { subject: 'Maths', value: 0 },
                { subject: 'English', value: 0 },
                { subject: 'Kiswahili', value: 0 },
                { subject: 'Science', value: 0 },
                { subject: 'SST/RE', value: 0 },
            ],
        };
    },
    computed: {
        // examCategory() {
        //     return this.$store.getters.singleCategory;
        // },
    },
    methods: {
        closeErrDialog() {
            this.err = null;
        },
        addExam() {
            this.addExamMode = true;
        },
        addScore() {
            this.examTotal = this.totalScore();
        },
        closeAddExamDialog() {
            this.mySubjects.forEach((el) => {
                el.value = 0;
            });
            this.closeSubjectErr();
            this.examTotal = null;
            this.term = '';
            this.examName = '';
            this.addExamMode = false;
        },
        closeSubjectErr() {
            this.subjectErr = null;
        },
        totalScore() {
            const scores = this.mySubjects.map((el) => el.value);
            const total = scores.reduce(
                (accumulator, curr) => accumulator + curr
            );
            return total;
        },
        loopOverSubjects() {
            const newSubArr = this.mySubjects.map((el) => {
                return [el.subject, el.value];
            });
            return newSubArr;
        },
        async refreshSingleCategory() {
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
                this.examCategory = this.$store.getters.singleCategory;
                this.isLoading = false;
            }
        },
        async submit() {
            this.addScore();
            if (this.examName === '') {
                this.subjectErr = 'Kindly give the exam a name to proceed.';
                return;
            }
            const examArr = this.loopOverSubjects();
            const examObj = examArr
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
                await axios.post(
                    'https://project-v-api.herokuapp.com/api/v1/exams',
                    JSON.stringify({
                        categoryId: this.$route.params.categoryId,
                        exam,
                        examName: this.examName,
                        term: this.term,
                    }),
                    {
                        headers: {
                            authorization:
                                'Bearer ' + this.$store.getters.getUser.token,
                            'Content-Type': 'application/json',
                        },
                    }
                );
            } catch (err) {
                this.subjectErr =
                    err.response.message ||
                    'Something went wrong.Please try again.';
                console.log(err);
            }
            this.refreshSingleCategory();
            this.isLoading = false;
            this.addExamMode = false;
        },
        async fetchSchools(score) {
            this.isLoading = true;
            try {
                await this.$store.dispatch('fetchSchools', score);
                this.$router.push('/schools');
            } catch (error) {
                this.err = error || 'Something went wrong';
                console.log(error);
            }
            this.isLoading = false;
        },
    },
    created() {
        this.refreshSingleCategory();
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

.subject-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.exam-page-title {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
}
input {
    display: inline-block;
    /* width: 100%; */
    border: 1px solid #ccc;
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
.subject-err {
    font-size: 1.4rem;
    color: red;
    margin-top: 0.8rem;
}
</style>
