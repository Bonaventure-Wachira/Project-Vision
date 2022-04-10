import { createStore } from 'vuex';
import axios from 'axios';
const base_url = 'https://project-v-api.herokuapp.com';

export default createStore({
    state() {
        return {
            user: null,
            loginErr: null,
        };
    },
    actions: {
        async login(context, payload) {
            const userData = {
                email: payload.email,
                password: payload.password,
            };
            try {
                const response = await axios.post(
                    base_url + '/api/v1/users/login',
                    JSON.stringify(userData),
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );
                console.log(response);
                const newRes = {
                    userId: response.data.userId,
                    token: response.data.token,
                };
                context.commit('authenticate', newRes);
            } catch (error) {
                console.log(error.response.data);
                context.commit('returnErr', error.response.data);
            }
        },
        async signup(context, payload) {
            const userData = {
                firstName: payload.firstName,
                lastName: payload.lastName,
                email: payload.email,
                county: payload.county,
                password: payload.password,
                confirmPassword: payload.confirmPassword,
                educationLevel: payload.educationLevel,
                securityQuestion: payload.securityQuestion,
                securityAnswer: payload.securityAns,
            };
            try {
                const response = await axios.post(
                    base_url + '/api/v1/users/signup',
                    JSON.stringify(userData),
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );
                console.log(response);
                const newRes = {
                    userId: response.data.userId,
                    token: response.data.token,
                };
                context.commit('authenticate', newRes);
            } catch (error) {
                console.log(error.response.data);
                context.commit('returnErr', error.response.data);
            }
        },
    },
    mutations: {
        authenticate(state, payload) {
            state.user = payload;
        },
        returnErr(state, payload) {
            state.loginErr = payload.message;
        },
    },
    getters: {
        isAuth(state) {
            return !!state.user;
        },
        getLoginErr(state) {
            return state.loginErr;
        },
    },
});
