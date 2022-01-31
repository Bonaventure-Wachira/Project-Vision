<template>
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
                    <label for="educationLevel">Level of education</label>
                    <select
                        name="educationLevel"
                        id="educationLevel"
                        v-model.trim="educationLevel"
                    >
                        <option value="primary">Primary school</option>
                        <option value="highSchool">High school</option>
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
                        <option value="car">What was your first car?</option>
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
            </form>
        </div>
    </base-card>
</template>
<script>
export default {
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            educationLevel: 'primary',
            password: '',
            confirmPassword: '',
            error: false,
            errorMessage: null,
            securityQuestion: 'maiden',
            securityAns: '',
        };
    },
    methods: {
        async signUp() {
            this.error = false;
            this.errorMessage = null;
            if (this.email === '' || !this.email.includes('@')) {
                this.error = true;
                this.errorMessage = 'Please enter a valid email address';
                return;
            }
        },
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
