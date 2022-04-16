import { createRouter, createWebHistory } from 'vue-router';
import DashBoardPage from './../pages/DashboardPage.vue';
import LoginPage from './../pages/LoginPage.vue';
import SignupPage from './../pages/SignupPage.vue';
import PasswordRecovery from './../pages/PasswordRecovery.vue';
import ResetPassword from './../pages/ResetPassword.vue';
import HighSchool from './../pages/HighSchool.vue';
import AllSchools from './../pages/schools/AllSchools.vue';
import ExamsPage from './../components/layout/ExamsPage.vue';
import Schools from './../components/layout/Schools.vue';

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        { path: '/', redirect: '/dashboard' },
        { path: '/dashboard', component: DashBoardPage },
        { path: '/myexams/:categoryId', component: ExamsPage },
        { path: '/schools', component: Schools },
        { path: '/login', component: LoginPage },
        { path: '/signup', component: SignupPage },
        { path: '/passwordRecovery', component: PasswordRecovery },
        { path: '/passwordReset', component: ResetPassword },
        { path: '/highschool', component: HighSchool },
        { path: '/allschools', component: AllSchools },
    ],
});

export default router;
