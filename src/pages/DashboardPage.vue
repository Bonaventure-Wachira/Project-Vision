<template>
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

    <!-- Edit categories -->

    <base-dialog
        :show="editCategoriesMode"
        title="Edit your categories"
        @close="closeEditCategoriesDialog"
    >
        <ul>
            <li v-for="(category, index) in resultsCategory" :key="index">
                <span>{{ category }}</span>
                <div class="edit-buttons">
                    <base-button mode="flat">Edit</base-button>
                    <base-button mode="danger" @click="deleteCategory(index)"
                        >Delete</base-button
                    >
                </div>
            </li>
        </ul>

        <base-button>Add Category</base-button>
    </base-dialog>

    <h3 class="main-heading">My Dashboard</h3>
    <div class="container">
        <div class="subjects">
            <secondary-card>
                <h2 class="secondary-heading">Academics</h2>
                <h2 class="tertiary-heading">My subjects</h2>
                <ul class="primary-text">
                    <li v-for="(subject, index) in mySubjects" :key="index">
                        {{ subject }}
                    </li>
                </ul>
                <!-- <base-button @click="editSubjects">Edit Subjects</base-button> -->
            </secondary-card>
        </div>
        <div class="right-side">
            <div class="schools">
                <secondary-card>
                    <h2 class="tertiary-heading">List of High schools</h2>
                    <base-button mode="outline" link to="/allschools"
                        >All Schools</base-button
                    >
                </secondary-card>
            </div>
            <secondary-card>
                <h2>Results Category</h2>
                <div v-if="!results">
                    <h2>
                        You do not have any exam records just yet.
                    </h2>
                    <base-button>Add results</base-button>
                </div>
                <ul v-else>
                    <li
                        v-for="(category, index) in resultsCategory"
                        :key="index"
                    >
                        {{ category }}
                        <base-button mode="flat"> Edit categories</base-button>
                    </li>
                </ul>
                <!-- <base-button @click="editCategories"
                    >Edit categories</base-button
                > -->
            </secondary-card>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            error: false,
            errorMessage: null,
            results: null,
            mySubjects: [
                'Maths',
                'English',
                'Kiswahili',
                'Science',
                'Social Studies',
                'Religious Education',
            ],
            resultsCategory: ['Class 4', 'Class 5', 'Class 6'],
            editMode: false,
            editCategoriesMode: false,
        };
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
        editCategories() {
            this.editCategoriesMode = true;
        },
        closeEditCategoriesDialog() {
            this.editCategoriesMode = false;
        },
        deleteCategory(index) {
            this.resultsCategory.splice(index, 1);
        },
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

.schools {
    margin-bottom: 3rem;
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

.tertiary-heading {
    font-size: 1.8rem;
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
