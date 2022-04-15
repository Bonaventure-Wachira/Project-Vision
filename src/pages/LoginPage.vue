<template>
    <base-dialog :show="isLoading" fixed title="Logging in..">
        <base-spinner v-if="isLoading"></base-spinner>
    </base-dialog>
    <base-card>
        <div class="container">
            <h3>Log into your account!</h3>
            <form @submit.prevent="login">
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
                    <label for="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        v-model.trim="password"
                    />
                </div>
                <p v-if="!!errorMessage" class="errorMessage">
                    {{ errorMessage }}
                </p>
                <div class="submission-box">
                    <base-button>Login</base-button>
                    <div class="forgot-password-box">
                        <base-button link to="/passwordRecovery" mode="flat"
                            >Forgot password?</base-button
                        >
                    </div>
                </div>
            </form>
        </div>
    </base-card>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            email: '',
            password: '',
            error: false,
            errorMessage: null,
            isLoading: false,
        };
    },
    methods: {
        async login() {
            this.error = false;
            this.errorMessage = null;
            if (this.email === '' || !this.email.includes('@')) {
                this.errorMessage = 'Please enter a valid email address';
                return;
            }
            if (this.password.length < 6) {
                this.errorMessage =
                    'Your password should not be less than six characters';
                return;
            }

            this.isLoading = true;
            await this.$store.dispatch('login', {
                email: this.email,
                password: this.password,
            });
            this.isLoading = false;
            this.$router.push('/');
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
    font-size: 1.3rem;
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

.submission-box {
    display: flex;
    align-items: center;
}
.forgot-password-box {
    margin-left: 2rem;
}
</style>
