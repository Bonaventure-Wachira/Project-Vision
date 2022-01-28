<template>
    <base-card>
        <h3>Log into your account</h3>
        <form @submit.prevent="signUp">
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
            <base-button>Log in</base-button>
        </form>
    </base-card>
</template>
<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            error: false,
            errorMessage: null,
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
    margin: 0.8rem 0;
    font-size: 1.5rem;
}

.invalid input {
    border: 1px solid red;
}

label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}
button {
    outline: none;
    margin: 0.6rem 0;
}
</style>
