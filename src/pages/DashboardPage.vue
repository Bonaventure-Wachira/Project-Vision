<template>
    <div class="container">
        <h3 class="main-heading">My Dashboard</h3>
        <base-card>
            <div class="container">
                <h2 class="secondary-heading">Academics</h2>
                <h2 class="tertiary-heading">School Progress</h2>
                <ul class="primary-text">
                    <li v-for="(subject, index) in mySubjects" :key="index">
                        {{ subject }}
                    </li>
                </ul>
                <h2 class="tertiary-heading">List of High schools</h2>
                <ul class="primary-text">
                    <li>Kiambu High</li>
                    <li>Kirangari High school</li>
                    <li>Wahundura Secondary school</li>
                    <li>Dagoretti High</li>
                </ul>
            </div>
        </base-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            error: false,
            errorMessage: null,
            mySubjects: [
                'Maths',
                'English',
                'Kiswahili',
                'Science',
                'Social Studies',
                'Religious Education',
            ],
        };
    },
};
</script>

<style scoped>
.container {
    margin: 2rem;
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
</style>
