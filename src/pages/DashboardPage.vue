<template>
    <h3>My Dashboard</h3>
</template>

<script>
import { activitiesRef } from './../firebaseConfig';
export default {
    data() {
        return {
            selectedActivityIndex: null,
            activity: '',
            isEditting: false,
            pendingActivity: null,
            error: false,
            errorMessage: null,
            loadedActivities: [],
        };
    },
    computed: {
        hasActivities() {
            return this.$store.getters.hasActivities;
        },
        allActivities() {
            return this.$store.getters.allActivities;
        },
    },
    methods: {
        addActivity() {
            this.error = false;
            this.errorMessage = null;
            if (this.activity === '') {
                this.error = true;
                this.errorMessage =
                    'Please enter an activity before hitting the add button';
                return;
            }
            const newActivity = this.activity;
            // this.allActivities.push(newActivity);
            activitiesRef.push({ activity: this.activity });
            this.$store.dispatch('addActivity', newActivity);
            this.activity = '';
        },
        // loadAllActivities() {
        //     const storedActivities = this.$store.getters.allActivities;
        //     this.allActivities = storedActivities;
        // },
        removeItem(index) {
            this.$store.dispatch('deleteActivity', index);
        },
        editItem(index, activity) {
            this.selectedActivityIndex = index;
            this.activity = activity;
            this.isEditting = true;
        },
        cancelEdit() {
            this.selectedActivityIndex = null;
            this.activity = '';
            this.isEditting = false;
        },
        saveEdit() {
            const payload = {
                index: this.selectedActivityIndex,
                newActivity: this.activity,
            };
            this.$store.dispatch('editActivity', payload);
            this.activity = '';
            this.selectedActivityIndex = null;
            this.isEditting = false;
        },
    },
};
</script>

<style scoped>
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

h3 {
    margin: 0.5rem 0;
    font-size: 2.4rem;
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
    border: 1px solid black;
    border-radius: 3px;
    margin: 1rem 0;
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
</style>
