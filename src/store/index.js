// let timer;
import { createStore } from 'vuex';
import axios from 'axios';
const base_url = 'https://project-v-api.herokuapp.com';

export default createStore({
    state() {
        return {
            user: null,
            loginErr: null,
            schools: null,
            examCategories: null,
        };
    },
    actions: {
        // Getting all the exam records of a single student
        async getAllExams({ commit, getters }) {
            const response = await axios.get(base_url + '/api/v1/categories', {
                headers: {
                    authorization: 'Bearer ' + getters.getUser.token,
                },
            });

            if (response.status !== 200) {
                const err = response.error;
                console.log(err);
                throw err;
            }

            const examCategories = response.data.categories;
            console.log(examCategories);
            commit('setExams', examCategories);
        },

        // Getting all schools
        async getAllSchools(context, payload) {
            if (!payload.forceRefresh) {
                return;
            }

            const schools = await axios.get(base_url + '/api/v1/schools');

            context.commit('getAllSchools', schools.data.data.schools);
        },
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
                localStorage.setItem('token', newRes.token);
                localStorage.setItem('userId', newRes.userId);
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
        tryLogin(context) {
            const token = localStorage.getItem('token');
            const userId = localStorage.getItem('userId');

            if (token && userId) {
                const user = {
                    token,
                    userId,
                };
                context.commit('authenticate', user);
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
        getAllSchools(state, payload) {
            state.schools = payload;
        },
        setExams(state, payload) {
            state.examCategories = payload;
        },
    },
    getters: {
        isAuth(state) {
            return !!state.user;
        },
        getUser(state) {
            return state.user;
        },
        getLoginErr(state) {
            return state.loginErr;
        },
        getAllSchools(state) {
            return state.schools;
        },
        getExams(state) {
            return state.examCategories;
        },
        isExamsCategories(state) {
            return !!state.examCategories;
        },
    },
});
