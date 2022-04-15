// let timer;
import { createStore } from 'vuex';
import axios from 'axios';
const base_url = 'https://project-v-api.herokuapp.com';

export default createStore({
    state() {
        return {
            user: null,
            loginErr: null,
            allSchools: null,
            examCategories: null,
            singleCategory: null,
            userInfo: null,
            schools: null,
        };
    },
    actions: {
        // adding a single exam
        async addExam({ getters }, payload) {
            const { categoryId, exam, examName, term } = payload;
            const response = await axios.post(
                base_url + '/api/v1/exams',
                JSON.stringify({
                    categoryId,
                    exam,
                    examName,
                    term,
                }),
                {
                    headers: {
                        authorization: 'Bearer ' + getters.getUser.token,
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (response.status !== 200) {
                const err = response.error;
                console.log(err);
                throw err;
            }
        },
        // Adding a single category
        async addCategory({ commit, getters }, payload) {
            const response = await axios.post(
                base_url + '/api/v1/categories/',
                {
                    year: payload,
                    studentId: getters.getUser.userId,
                },
                {
                    headers: {
                        authorization: 'Bearer ' + getters.getUser.token,
                        'Content-Type': 'application/json',
                    },
                }
            );
            if (response.status !== 200) {
                const err = response.error;
                console.log(err);
                throw err;
            }
        },
        // Getting a single exam category
        async getSingleCategory({ commit, getters }, payload) {
            const response = await axios.get(
                base_url + '/api/v1/categories/' + payload,
                {
                    headers: {
                        authorization: 'Bearer ' + getters.getUser.token,
                    },
                }
            );

            if (response.status !== 200) {
                const err = response.error;
                console.log(err);
                throw err;
            }

            const singleCategory = response.data.category;
            commit('setCategory', singleCategory);
        },
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
        async fetchUser({ commit, getters }) {
            const response = await axios.get(
                base_url + '/api/v1/users/' + getters.getUser.userId
            );
            if (response.status !== 200) {
                const err = response.error;
                console.log(err);
                throw err;
            }
            const userInfo = {
                county: response.data.user.county,
                level: response.data.user.levelOfEducation,
                firstName: response.data.user.firstName,
                lastName: response.data.user.lastName,
            };
            commit('setUserInfo', userInfo);
        },
        async fetchSchools({ commit, getters }, payload) {
            const aridCounties = [
                'baringo',
                'garissa',
                'isiolo',
                'mandera',
                'marsabit',
                'samburu',
                'tana river',
                'turkana',
                'wajir',
                'embu',
                'kajiado',
                'kilifi',
                'kitui',
                'kwale',
                'laikipia',
                'lamu',
                'makueni',
                'meru',
                'narok',
                'nyeri',
                'taita taveta',
                'tharaka nithi',
                'west pokot',
            ];
            let url;
            if (
                payload >= 400 &&
                !aridCounties.includes(getters.getUserInfo.county.toLowerCase())
            ) {
                url = base_url + '/api/v1/schools/nationals';
            } else if (
                payload >= 300 &&
                !aridCounties.includes(getters.getUserInfo.county.toLowerCase())
            ) {
                url = base_url + '/api/v1/schools/extra';
            } else if (
                payload >= 200 &&
                !aridCounties.includes(getters.getUserInfo.county.toLowerCase())
            ) {
                url = base_url + '/api/v1/schools/county';
            } else if (
                payload >= 325 &&
                aridCounties.includes(getters.getUserInfo.county.toLowerCase())
            ) {
                url = base_url + '/api/v1/schools/nationals';
            } else if (
                payload >= 250 &&
                aridCounties.includes(getters.getUserInfo.county.toLowerCase())
            ) {
                url = base_url + '/api/v1/schools/extra';
            } else {
                url = base_url + '/api/v1/schools/county';
            }

            const response = await axios.get(url);
            if (response.status !== 200) {
                const err = response.error;
                console.log(err);
                throw err;
            }
            const schools = response.data.data.schools;
            commit('loadSchools', schools);
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
        setCategory(state, payload) {
            state.singleCategory = payload;
        },
        setUserInfo(state, payload) {
            state.userInfo = payload;
        },
        loadSchools(state, payload) {
            state.schools = payload;
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
            return state.allSchools;
        },
        getExams(state) {
            return state.examCategories;
        },
        isExamsCategories(state) {
            return !!state.examCategories;
        },
        singleCategory(state) {
            return state.singleCategory;
        },
        getUserInfo(state) {
            return state.userInfo;
        },
        getSchools(state) {
            return state.schools;
        },
    },
});
