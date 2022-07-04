<template>
    <base-card>
        <div class="container">
            <h3>Password recovery</h3>
            <form @submit.prevent="submit">
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
                    <label for="securityQuestion">Security question</label>
                    <select
                        name="securityQuestion"
                        id="securityQuestion"
                        v-model.trim="securityQuestion"
                    >
                        <option value="select">--Select--</option>
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
                <base-button>Submit</base-button>
                <p class="errorMessage" v-if="!!errorMessage">
                    {{ errorMessage }}
                </p>
            </form>
        </div>
    </base-card>
</template>
<script>
export default {
    data() {
        return {
            email: '',
            error: false,
            errorMessage: null,
            securityQuestion: 'select',
        };
    },
    methods: {
        async submit() {
            this.error = false;
            this.errorMessage = null;
            if (this.email === '' || !this.email.includes('@')) {
                this.error = true;
                this.errorMessage = 'Please enter a valid email address';
                return;
            }

            if (this.securityQuestion === 'select') {
                this.error = true;
                this.errorMessage = 'Please select a maiden question.';
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
    /* font: inherit; */
    font-size: 1.3rem;
    padding: 1rem 1.5rem;
    font-size: 1.4rem;
}

input:focus {
    background-color: #f0e6fd;
    outline: none;
    border-color: #1572a1;
}

h3 {
    margin: 1.3rem 0;
    font-size: 2.2rem;
}

.errorMessage {
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
