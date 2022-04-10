import { createStore } from 'vuex';
import axios from 'axios';
const base_url = 'https://project-v-api.herokuapp.com';

export default createStore({
    state() {
        return {
            user: null,
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
                context.commit('login', response);
            } catch (error) {
                console.log(error.response);
            }
        },
    },
    mutations: {
        login(state, payload) {
            state.user = payload;
        },
    },
    getters: {},
});
