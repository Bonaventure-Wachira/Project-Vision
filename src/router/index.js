import { createRouter, createWebHistory } from 'vue-router';
import DashBoardPage from './../pages/DashboardPage.vue';
import LoginPage from './../pages/LoginPage.vue';
import SignupPage from './../pages/SignupPage.vue';
import PasswordRecovery from './../pages/PasswordRecovery.vue';
import ResetPassword from './../pages/ResetPassword.vue';
import HighSchool from './../pages/HighSchool.vue';

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        { path: '/', redirect: '/dashboard' },
        { path: '/dashboard', component: DashBoardPage },
        { path: '/login', component: LoginPage },
        { path: '/signup', component: SignupPage },
        { path: '/passwordRecovery', component: PasswordRecovery },
        { path: '/passwordReset', component: ResetPassword },
        { path: '/highschool', component: HighSchool },
    ],
});

export default router;
