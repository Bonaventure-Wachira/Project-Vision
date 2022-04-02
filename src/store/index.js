import { createStore } from 'vuex';

export default createStore({
    state() {
        return {
            authToken: null,
        };
    },
    mutations: {
        addActivity(state, payload) {
            state.allActivities.push(payload);
        },
        deleteActivity(state, payload) {
            state.allActivities.splice(payload, 1);
            console.log(state.allActivities);
        },
        editActivity(state, payload) {
            state.allActivities[payload.index] = payload.newActivity;
        },
    },
    actions: {
        addActivity(context, payload) {
            context.commit('addActivity', payload);
        },
        deleteActivity(context, payload) {
            context.commit('deleteActivity', payload);
        },
        editActivity(context, payload) {
            context.commit('editActivity', payload);
        },
    },
    getters: {
        hasActivities(state) {
            return state.allActivities.length > 0;
        },
        allActivities(state) {
            return state.allActivities;
        },
        isLoggedIn(state) {
            return !!state.authToken;
        },
    },
});
