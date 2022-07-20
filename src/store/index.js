// let timer;
import { createStore } from 'vuex';
import axios from 'axios';
const base_url = 'https://project-v-api.herokuapp.com';
import secondCheck from '../utils/secondCheck';
import courseSelection from './../utils/courseSelection';

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
            fetchedSubjects: null,
            qualifiedCourses: null,
            examDetails: null,
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
            if (response.status !== 200) {
                const err = response.error;
                console.log(err);
                throw err;
            }
            const newRes = {
                userId: response.data.userId,
                token: response.data.token,
            };
            localStorage.setItem('token', newRes.token);
            localStorage.setItem('userId', newRes.userId);
            context.commit('authenticate', newRes);
        },
        async signup(context, payload) {
            const userData = {
                firstName: payload.firstName,
                lastName: payload.lastName,
                email: payload.email,
                county: payload.county,
                password: payload.password,
                confirmPassword: payload.confirmPassword,
                levelOfEducation: payload.levelOfEducation,
                securityQuestion: payload.securityQuestion,
                securityAnswer: payload.securityAns,
            };

            const response = await axios.post(
                base_url + '/api/v1/users/signup',
                JSON.stringify(userData),
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            if (response.status !== 200) {
                const err = response.error;
                console.log(err);
                throw err;
            }

            const newRes = {
                userId: response.data.userId,
                token: response.data.token,
            };
            localStorage.setItem('token', newRes.token);
            localStorage.setItem('userId', newRes.userId);
            context.commit('authenticate', newRes);
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
                subjects: response.data.user.subjects,
            };
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
            commit('setUserInfo', userInfo);
        },
        async fetchSchools({ commit }, payload) {
            let url;
            if (payload.exam.Total >= 400) {
                url = base_url + '/api/v1/schools/top_nationals';
            } else if (payload.exam.Total >= 300) {
                url = base_url + '/api/v1/schools/top_extra';
            } else if (payload.exam.Total >= 200) {
                url = base_url + '/api/v1/schools/top_county';
            } else {
                url = base_url + '/api/v1/schools/top_sub_county';
            }

            const response = await axios.get(url);
            if (response.status !== 200) {
                const err = response.error;
                console.log(err);
                throw err;
            }
            const schools = response.data.schools || response.data.data.schools;
            let predictedSchools;
            if (payload.exam.Total >= 420) {
                predictedSchools = schools.slice(0, 26);
            } else if (payload.exam.Total >= 400) {
                predictedSchools = schools.slice(26, -1);
            } else if (payload.exam.Total >= 350) {
                predictedSchools = schools.slice(0, 30);
            } else if (payload.exam.Total >= 300) {
                predictedSchools = schools.slice(30, -1);
            } else if (payload.exam.Total >= 250) {
                predictedSchools = schools.slice(0, 8);
            } else if (payload.exam.Total >= 200) {
                predictedSchools = schools.slice(8, -1);
            } else {
                predictedSchools = schools;
            }
            commit('loadSchools', predictedSchools);
            commit('loadExamDetails', payload);
        },
        async fetchSubjects({ commit }) {
            const response = await axios.get(base_url + '/api/v1/subjects');
            if (response.status !== 200) {
                const err = response.error;
                console.log(err);
                throw err;
            }
            commit('fetchSubjects', response.data.subjects);
        },
        async alterMySubjects({ commit, getters }, payload) {
            const subjectObj = {
                subjects: payload.subjects,
            };
            const response = await axios.patch(
                base_url + '/api/v1/users/' + getters.getUser.userId,
                JSON.stringify(subjectObj),
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            if (response.status !== 200) {
                const err = response.error;
                console.log(err);
                throw err;
            }
            commit('fetchSubjects', response.data.updatedUser.subjects);
        },
        async fetchCourses(context, payload) {
            const courses = courseSelection(payload);

            if (courses.length > 0) {
                const response = await axios.post(
                    // 'http://localhost:3000/api/v1/courses//selectedcourses',
                    base_url + '/api/v1/courses/selectedcourses',
                    {
                        courses,
                    },

                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );

                if (response.status !== 200) {
                    const err = response.error;
                    console.log(err);
                    throw err;
                }
                // Throw an if check to get the courses with the respective universities
                const finalCourses = secondCheck(
                    response.data.courses,
                    payload
                );

                localStorage.setItem(
                    'qualifiedCourses',
                    JSON.stringify(finalCourses)
                );
                context.commit('setQualifiedCourses', finalCourses);
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
        loadUserInfo(context) {
            const userInfo = JSON.parse(localStorage.getItem('userInfo'));
            if (userInfo) {
                context.commit('setUserInfo', userInfo);
            }
        },
        loadUserCourses(context) {
            const qualifiedCourses = localStorage.getItem('qualifiedCourses');
            if (qualifiedCourses) {
                const allCourses = JSON.parse(qualifiedCourses);
                context.commit('setQualifiedCourses', allCourses);
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
        fetchSubjects(state, payload) {
            state.fetchedSubjects = payload;
        },
        setQualifiedCourses(state, payload) {
            state.qualifiedCourses = payload;
        },
        loadExamDetails(state, payload) {
            state.examDetails = payload;
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
        fetchedSubjects(state) {
            return state.fetchedSubjects;
        },
        qualifiedCourses(state) {
            return state.qualifiedCourses;
        },
        examDetails(state) {
            return state.examDetails;
        },
    },
});
