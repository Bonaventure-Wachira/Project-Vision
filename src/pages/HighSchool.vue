<template>
    <!-- Edit subjects dialog box  -->
    <secondary-dialog
        :show="editMode"
        title="Edit your subjects"
        @close="closeDialogBox"
    >
        <base-spinner v-if="subjectAreaLoading"></base-spinner>
        <ul v-else-if="!subjectAreaLoading && fetchedSubjects">
            <li v-for="subject in fetchedSubjects" :key="subject._id">
                <span>{{ subject.name }}</span>
                <input
                    type="checkbox"
                    :name="subject.name"
                    :value="subject.name"
                    v-model="subjectsOnEdit"
                    :checked="null"
                />
            </li>
            <base-button @click="saveChanges">Save changes</base-button>
            <p v-if="!!subjectAreaErr">{{ subjectAreaErr }}</p>
        </ul>
    </secondary-dialog>

    <!-- Add category -->

    <base-dialog
        :show="addCategoryMode"
        title="Add category"
        @close="closeAddCategoriesDialog"
    >
        <div class="form-group">
            <label for="year">Year of education</label>
            <select name="year" id="year" v-model.trim="year">
                <option value="one">One</option>
                <option value="two">Two</option>
                <option value="three">Three</option>
                <option value="four">Four</option>
            </select>
        </div>

        <base-button @click="submitCategory">Add Category</base-button>
    </base-dialog>

    <h3 class="main-heading">My Dashboard</h3>
    <div class="container">
        <div class="subjects">
            <base-spinner v-if="isLoading"></base-spinner>

            <secondary-card v-else-if="mySubjects.length === 0 && !isLoading">
                <p class="instructions subject-instructions">
                    Seems like you have not added any subjects yet.
                </p>
                <base-button @click="editSubjects">Add subjects</base-button>
            </secondary-card>
            <secondary-card v-else-if="mySubjects.length > 0 && !isLoading">
                <h2 class="secondary-heading">Academics</h2>
                <h2 class="schools-heading">My subjects</h2>
                <ul class="primary-text">
                    <li v-for="(subject, index) in mySubjects" :key="index">
                        {{ subject }}
                    </li>
                </ul>
                <base-button @click="editSubjects">Edit Subjects</base-button>
            </secondary-card>
        </div>
        <div class="right-side">
            <secondary-card>
                <p class="instructions">
                    To arrange your exam results, you will need to add an exam
                    category first in the
                    <strong>Results Category</strong> section. Then after it
                    pops up on addition on your screen, click on the button and
                    add the exams results for that class.
                </p>
            </secondary-card>
            <secondary-card>
                <base-spinner v-if="isLoading"></base-spinner>
                <div class="results-header" v-if="!isLoading">
                    <h2>Results Category</h2>
                    <base-button @click="refreshCategories"
                        >Refresh</base-button
                    >
                </div>
                <div v-if="!areCategoriesAvailable && !isLoading">
                    <h2>
                        You do not have any exam records just yet.
                    </h2>
                    <base-button @click="addCategory">Add category</base-button>
                </div>
                <ul v-if="!isLoading && resultsCategory">
                    <li
                        v-for="(category, index) in resultsCategory"
                        :key="index"
                    >
                        Form {{ category.year }}
                        <base-button
                            mode="flat"
                            link
                            :to="/secondaryexams/ + category._id"
                        >
                            Go to class category</base-button
                        >
                    </li>
                    <base-button @click="addCategory">Add category</base-button>
                </ul>
            </secondary-card>
        </div>
    </div>
</template>

<script>
// import axios from 'axios';
export default {
    data() {
        return {
            error: false,
            errorMessage: null,
            examRecords: null,
            mySubjects: [],
            resultsCategory: null,
            editMode: false,
            addCategoryMode: false,
            resultModal: false,
            isLoading: false,
            subjectAreaLoading: false,
            subjectAreaErr: null,
            year: 'one',
            subjectsOnEdit: [],
        };
    },
    computed: {
        areCategoriesAvailable() {
            return this.$store.getters.isExamsCategories;
        },
        fetchedSubjects() {
            return this.$store.getters.fetchedSubjects;
        },
    },
    methods: {
        async editSubjects() {
            this.editMode = true;
            this.subjectAreaLoading = true;
            await this.fetchSubjects();
            this.subjectAreaLoading = false;
        },
        closeDialogBox() {
            this.editMode = false;
        },
        deleteSubject(index) {
            this.mySubjects.splice(index, 1);
        },
        addCategory() {
            this.addCategoryMode = true;
        },
        closeAddCategoriesDialog() {
            this.addCategoryMode = false;
        },
        async saveChanges() {
            this.subjectAreaLoading = true;
            try {
                await this.$store.dispatch('alterMySubjects', {
                    subjects: this.subjectsOnEdit,
                });
                await this.fetchUser();
                this.mySubjects = this.$store.getters.getUserInfo.subjects;
                this.editMode = false;
            } catch (err) {
                this.subjectAreaErr = err || 'Something went wrong';
            }
            this.subjectAreaLoading = false;
        },
        async submitCategory() {
            this.isLoading = true;
            try {
                await this.$store.dispatch('addCategory', this.year);
            } catch (err) {
                this.errorMessage =
                    err || 'Something went wrong. Please try again';
            }
            this.refreshCategories();
            this.closeAddCategoriesDialog();
            this.isLoading = false;
        },
        setResultsCategories() {
            this.resultsCategory = this.$store.getters.getExams;
        },
        async refreshCategories() {
            this.isLoading = true;
            try {
                if (this.$store.getters.isAuth) {
                    await this.$store.dispatch('getAllExams');
                }
            } catch (err) {
                console.log(err);
            }
            this.isLoading = false;
            this.setResultsCategories();
        },
        async fetchUser() {
            if (this.$store.getters.isAuth) {
                this.isLoading = true;
                try {
                    await this.$store.dispatch('fetchUser');
                    this.mySubjects = this.$store.getters.getUserInfo.subjects;
                } catch (err) {
                    this.errorMessage = err || 'Something went wrong';
                }
                this.isLoading = false;
            }
        },
        async fetchSubjects() {
            try {
                await this.$store.dispatch('fetchSubjects');
            } catch (err) {
                this.errorMessage = err || 'Something went wrong';
            }
        },
    },
    async mounted() {
        if (this.$store.getters.isAuth) {
            this.refreshCategories();
            await this.fetchUser();
            // console.log(this.mySubjects);
        }
    },
};
</script>

<style scoped>
.container {
    display: flex;
    max-width: 100rem;
    margin: 3rem auto;
    justify-content: space-between;
}

.results-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.schools {
    margin-top: 3rem;
}

.input-group {
    margin: 0.5rem 0;
}

input {
    display: inline-block;
    width: 70%;
    border: 1px solid #ccc;
    font: inherit;
    margin-right: 1rem;
    padding: 0.3rem 0.5rem;
}

input:focus {
    background-color: #f0e6fd;
    outline: none;
    border-color: #3d008d;
}

ul {
    font-size: 1.4rem;
}

.main-heading {
    margin-top: 2rem;
    margin-bottom: 2rem;
    margin-left: 14rem;
    font-size: 2.6rem;
}

.secondary-heading {
    font-size: 2.1rem;
    margin-bottom: 1rem;
}

.schools-heading {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
}

.primary-text {
    font-size: 1.5rem;
}

.invalid input {
    border: 1px solid red;
}
li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    width: 85%;
    padding: 0.5rem;
    /* border: 1px solid black; */
    border-radius: 3px;
    margin: 1rem 0;
    background-color: #f0e6fd;
}
span {
    color: black;
    font-size: 1.3rem;
}

label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}
.form-group {
    margin: 1.5rem 0;
}

label {
    font-size: 1.5rem;
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}

.instructions {
    font-size: 1.8rem;
}

.subject-instructions {
    margin-bottom: 2rem;
}

.school-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

@media only screen and (max-width: 1000px) {
    .container {
        flex-direction: column;
        align-items: center;
    }

    .subjects {
        margin-bottom: 3rem;
    }
}
</style>
