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
        <base-spinner v-if="examLoading"></base-spinner>
        <div v-else-if="mySubjects.length < 7 && !examLoading">
            <p>
                You cannot add an exam since you have less than seven saved
                subjects. Kindly adjust them in the dashboard area first.
            </p>
        </div>
        <div v-else>
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
        </div>
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
                    <div class="term-text">
                        <span>Term: </span>
                        <span>{{ exam.term }}</span>
                    </div>
                </div>
                <div class="exam-titles">
                    <div class="subject-style">
                        <span>Subject</span>
                    </div>
                    <div class="grades-style">
                        <span>Marks</span><span>Grade</span><span>Points</span>
                    </div>
                </div>
                <div
                    v-for="(el, index) in Object.entries(exam.exam)"
                    :key="index"
                    class="subject-values"
                >
                    <div class="subject-style-value">
                        <span>
                            {{ el[0] }}
                        </span>
                    </div>
                    <div class="grades-style-value">
                        <span>
                            {{ el[1].value }}
                        </span>
                        <span>
                            {{ el[1].grade }}
                        </span>
                        <span>
                            {{ el[1].points }}
                        </span>
                    </div>
                </div>
                <base-button mode="outline" @click="fetchSchools(exam.exam)"
                    >Predicted courses</base-button
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
            examLoading: false,
            term: 'one',
            examName: '',
            examCategory: null,
            mySubjects: [],
        };
    },
    computed: {
        mySavedSubjects() {
            return this.$store.getters.getUserInfo.subjects;
        },
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
        addGPAScore() {
            let grade = null;
            let points = 0;
            const result = this.mySubjects.map((el) => {
                if (el.value >= 80) {
                    grade = 'A';
                    points = 12;
                } else if (el.value >= 75) {
                    grade = 'A-';
                    points = 11;
                } else if (el.value >= 70) {
                    grade = 'B+';
                    points = 10;
                } else if (el.value >= 65) {
                    grade = 'B';
                    points = 9;
                } else if (el.value >= 60) {
                    grade = 'B-';
                    points = 8;
                } else if (el.value >= 55) {
                    grade = 'C+';
                    points = 7;
                } else if (el.value >= 50) {
                    grade = 'C';
                    points = 6;
                } else if (el.value >= 45) {
                    grade = 'C-';
                    points = 5;
                } else if (el.value >= 40) {
                    grade = 'D+';
                    points = 4;
                } else if (el.value >= 35) {
                    grade = 'D';
                    points = 3;
                } else if (el.value >= 30) {
                    grade = 'D-';
                    points = 2;
                } else {
                    grade = 'E';
                    points = 1;
                }
                return { subject: el.subject, value: el.value, grade, points };
            });
            return result;
        },
        alterMySubjects() {
            const newSubjArr = this.mySavedSubjects.map((el) => {
                return { subject: el, value: 0 };
            });
            this.mySubjects = newSubjArr;
        },
        totalScore() {
            const scores = this.mySubjects.map((el) => el.value);
            const total = scores.reduce(
                (accumulator, curr) => accumulator + curr
            );
            return total;
        },
        loopOverSubjects() {
            const newSubArr = this.addGPAScore().map((el) => {
                return {
                    subject: el.subject,
                    value: el.value,
                    grade: el.grade,
                    points: el.points,
                };
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
            this.addGPAScore();
            const examArr = this.loopOverSubjects().sort((a, b) => {
                return b.value - a.value;
            });
            // console.log(examArr);

            const examObj = examArr.reduce((accum, subjectObj) => {
                let subject, value, points, grade;
                subject = subjectObj.subject;
                value = subjectObj.value;
                points = subjectObj.points;
                grade = subjectObj.grade;
                return {
                    ...accum,
                    [subject]: subjectObj,
                };
            }, {});

            this.examLoading = true;

            try {
                await axios.post(
                    'https://project-v-api.herokuapp.com/api/v1/exams',
                    JSON.stringify({
                        categoryId: this.$route.params.categoryId,
                        exam: examObj,
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
            this.examLoading = false;
            this.addExamMode = false;
        },
        async fetchSchools(exam) {
            // this.isLoading = true;
            // try {
            //     await this.$store.dispatch('fetchCourses', exam);
            //     this.$router.push('/schools');
            // } catch (error) {
            //     this.err = error || 'Something went wrong';
            //     console.log(error);
            // }
            // this.isLoading = false;
            console.log(exam);
            const examArr = Object.entries(exam);
            console.log(examArr);
        },
        async fetchUser() {
            if (this.$store.getters.isAuth) {
                this.isLoading = true;
                try {
                    await this.$store.dispatch('fetchUser');
                    // this.mySubjects = this.$store.getters.getUserInfo.subjects;
                } catch (err) {
                    this.errorMessage = err || 'Something went wrong';
                }
                this.isLoading = false;
            }
        },
    },
    async created() {
        await this.refreshSingleCategory();
        await this.fetchUser();
        this.alterMySubjects();
    },
};
</script>

<style scoped>
h3 {
    font-size: 1.6rem;
    margin: 1rem 0;
}
.card-title {
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
    margin-bottom: 1rem;
    font-weight: bold;
}

.term-text {
    font-size: 1.5rem;
    text-transform: capitalize;
}

.exam-name {
    /* margin-right: 1rem; */
    text-transform: capitalize;
}
.exam-titles {
    font-weight: bold;
    display: flex;
    margin-bottom: 1rem;
}

.subject-values {
    display: flex;
    margin-bottom: 0.5rem;
}

.subject-style {
    flex: 0 0 55%;
}
.grades-style {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    flex: 1;
}

.subject-style-value {
    flex: 0 0 55%;
}

.grades-style-value {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    flex: 1;
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
