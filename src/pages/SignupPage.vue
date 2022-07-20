<template>
    <div>
        <base-dialog :show="isLoading" fixed title="Signing you up...">
            <base-spinner v-if="isLoading"></base-spinner>
        </base-dialog>
        <base-card>
            <div class="container">
                <h3>Sign up to our service today!</h3>
                <form @submit.prevent="signUp">
                    <div class="form-group">
                        <label for="firstName">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            v-model.trim="firstName"
                        />
                    </div>
                    <div class="form-group">
                        <label for="lastName">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            v-model.trim="lastName"
                        />
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            v-model.trim="email"
                        />
                    </div>
                    <div class="form-group">
                        <label for="county">County</label>
                        <select name="county" id="county" v-model.trim="county">
                            <option
                                v-for="countyName in listOfCounties"
                                :key="countyName"
                                :value="countyName"
                                >{{ countyName }}</option
                            >
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="levelOfEducation">Level of education</label>
                        <select
                            name="levelOfEducation"
                            id="levelOfEducation"
                            v-model.trim="levelOfEducation"
                        >
                            <option value="primary">Primary school</option>
                            <option value="secondary">High school</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            v-model.trim="password"
                        />
                    </div>
                    <div class="form-group">
                        <label for="confirmPassword">Confirm password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            v-model.trim="confirmPassword"
                        />
                    </div>
                    <div class="form-group">
                        <label for="securityQuestion">Security question</label>
                        <select
                            name="securityQuestion"
                            id="securityQuestion"
                            v-model.trim="securityQuestion"
                        >
                            <option value="maiden"
                                >What is your mother's maiden name?</option
                            >
                            <option value="pet"
                                >What is the name of your first pet?</option
                            >
                            <option value="car"
                                >What was your first car?</option
                            >
                            <option value="school"
                                >What elementary school did you attend?</option
                            >
                            <option value="town"
                                >What is the name of the town where you were
                                born?</option
                            >
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="lastName">Security Answer</label>
                        <input
                            type="text"
                            name="securityAns"
                            id="securityAns"
                            v-model.trim="securityAns"
                        />
                    </div>
                    <base-button>Sign Up</base-button>
                    <p class="errMessage" v-if="err">{{ err }}</p>
                </form>
            </div>
        </base-card>
    </div>
</template>
<script>
import listOfCounties from './../utils/listOfCounties';
export default {
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            county: '--select--',
            levelOfEducation: 'primary',
            password: '',
            confirmPassword: '',
            securityQuestion: 'maiden',
            securityAns: '',
            isLoading: false,
            err: null,
            listOfCounties: [],
        };
    },
    methods: {
        async signUp() {
            this.err = null;
            if (this.email === '' || !this.email.includes('@')) {
                this.err = 'Please enter a valid email address';
                return;
            }
            if (this.password.length < 6) {
                this.err =
                    'Your password should not be less than six characters';
                return;
            }
            if (this.county === '--select--') {
                this.err = 'Kindly select a county to make an account';
                return;
            }
            this.isLoading = true;
            try {
                await this.$store.dispatch('signup', {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    county: this.county,
                    password: this.password,
                    confirmPassword: this.confirmPassword,
                    levelOfEducation: this.levelOfEducation,
                    securityQuestion: this.securityQuestion,
                    securityAns: this.securityAns,
                });
                await this.fetchUser();
                if (this.levelOfEducation === 'primary') {
                    this.$router.replace('/');
                } else {
                    this.$router.replace('/highschool');
                }
            } catch (err) {
                this.err = err || 'Something went wrong, please try again.';
                return;
            }

            this.isLoading = false;
        },
        async fetchUser() {
            await this.$store.dispatch('fetchUser');
        },
    },
    mounted() {
        this.listOfCounties = listOfCounties;
    },
};
</script>

<style scoped>
.container {
    margin: 2rem;
}

.form-group {
    margin: 1.5rem 0;
}

input {
    display: inline-block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    /* margin-right: 1rem; */
    padding: 1rem 1.5rem;
    font-size: 1.4rem;
}

input:focus {
    background-color: #f0e6fd;
    outline: none;
    border-color: #3d008d;
}

h3 {
    margin: 1.3rem 0;
    font-size: 2.2rem;
}

.errMessage {
    color: red;
}

.invalid input {
    border: 1px solid red;
}

label {
    font-size: 1.5rem;
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}
button {
    outline: none;
    margin: 0.6rem 0;
}
</style>
