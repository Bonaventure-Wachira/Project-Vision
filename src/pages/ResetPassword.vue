<template>
    <base-card>
        <div class="container">
            <h3>Reset your password</h3>
            <form @submit.prevent="submit">
                <div class="form-group">
                    <label for="email">New Password</label>
                    <input
                        type="password"
                        name="newPassword"
                        id="newPassword"
                        v-model.trim="newPassword"
                    />
                </div>
                <div class="form-group">
                    <label for="email">Confirm password</label>
                    <input
                        type="password"
                        name="passwordConfirm"
                        id="passwordConfirm"
                        v-model.trim="passwordConfirm"
                    />
                </div>
                <base-button>Reset password</base-button>
            </form>
        </div>
    </base-card>
</template>
<script>
export default {
    data() {
        return {
            newPassword: '',
            passwordConfirm: '',
            error: false,
            errorMessage: null,
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
