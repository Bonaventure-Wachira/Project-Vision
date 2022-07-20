<template>
    <div>
        <!-- Edit subjects dialog box  -->
        <base-dialog
            :show="editMode"
            title="Edit your subjects"
            @close="closeDialogBox"
        >
            <ul>
                <li v-for="(subject, index) in mySubjects" :key="index">
                    <span>{{ subject }}</span>
                    <div class="edit-buttons">
                        <base-button mode="flat">Edit</base-button>
                        <base-button mode="danger" @click="deleteSubject(index)"
                            >Delete</base-button
                        >
                    </div>
                </li>
            </ul>
            <base-button>Add Subject</base-button>
        </base-dialog>

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
                    <option value="five">Five</option>
                    <option value="six">Six</option>
                    <option value="seven">Seven</option>
                    <option value="eight">Eight</option>
                </select>
            </div>

            <base-button @click="submitCategory">Add Category</base-button>
        </base-dialog>

        <h3 class="main-heading">My Dashboard</h3>
        <div class="container">
            <div class="subjects">
                <!-- <secondary-card>
                <h2 class="secondary-heading">Academics</h2>
                <h2 class="schools-heading">My subjects</h2>
                <ul class="primary-text">
                    <li v-for="(subject, index) in mySubjects" :key="index">
                        {{ subject }}
                    </li>
                </ul>
                <base-button @click="editSubjects">Edit Subjects</base-button>
            </secondary-card> -->
                <secondary-card>
                    <p class="instructions">
                        To arrange your exam results, you will need to add an
                        exam category first in the
                        <strong>Results Category</strong> section. Then after it
                        pops up on addition on your screen, click on the button
                        and add the exams results for that class.
                    </p>
                </secondary-card>
            </div>
            <div class="right-side">
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
                        <base-button @click="addCategory"
                            >Add category</base-button
                        >
                    </div>
                    <ul v-if="!isLoading && resultsCategory">
                        <li
                            v-for="(category, index) in resultsCategory"
                            :key="index"
                        >
                            Class {{ category.year }}
                            <base-button
                                mode="flat"
                                link
                                :to="/myexams/ + category._id"
                            >
                                Go to class category</base-button
                            >
                        </li>
                        <base-button @click="addCategory"
                            >Add category</base-button
                        >
                    </ul>
                </secondary-card>
                <div class="schools">
                    <secondary-card>
                        <h2 class="schools-heading">List of High schools</h2>
                        <div class="school-links">
                            <base-button mode="outline" link to="/national"
                                >National</base-button
                            >
                            <base-button mode="outline" link to="/extra"
                                >Extra County</base-button
                            >
                            <base-button mode="outline" link to="/county"
                                >County</base-button
                            >
                        </div>
                    </secondary-card>
                </div>
            </div>
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
            mySubjects: [
                'Maths',
                'English',
                'Kiswahili',
                'Science',
                'Social Studies',
                'Religious Education',
            ],
            resultsCategory: null,
            editMode: false,
            addCategoryMode: false,
            resultModal: false,
            isLoading: false,
            year: 'five',
            levelOfEducation: 'primary',
        };
    },
    computed: {
        // resultsCategory() {
        //     return this.$store.getters.getExams;
        // },
        areCategoriesAvailable() {
            return this.$store.getters.isExamsCategories;
        },
    },
    methods: {
        editSubjects() {
            this.editMode = true;
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
                } catch (err) {
                    this.errorMessage = err || 'Something went wrong';
                }
                this.isLoading = false;
            }
        },
    },
    async mounted() {
        this.refreshCategories();
        await this.fetchUser();
        if (this.$store.getters.getUserInfo.level !== 'primary') {
            this.$router.replace('/highschool');
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

ul {
    font-size: 1.4rem;
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
