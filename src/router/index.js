import { createRouter, createWebHistory } from 'vue-router';
import DashBoardPage from './../pages/DashboardPage.vue';
import LoginPage from './../pages/LoginPage.vue';
import SignupPage from './../pages/SignupPage.vue';
import PasswordRecovery from './../pages/PasswordRecovery.vue';
import ResetPassword from './../pages/ResetPassword.vue';
import HighSchool from './../pages/HighSchool.vue';
import Extra from './../pages/schools/Extra.vue';
import National from './../pages/schools/National.vue';
import County from './../pages/schools/County.vue';
import ExamsPage from './../components/layout/ExamsPage.vue';
import SecondaryExams from './../components/layout/SecondaryExams.vue';
import Schools from './../components/layout/Schools.vue';

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        { path: '/', redirect: '/dashboard' },
        { path: '/dashboard', component: DashBoardPage },
        { path: '/myexams/:categoryId', component: ExamsPage },
        { path: '/secondaryexams/:categoryId', component: SecondaryExams },
        { path: '/schools', component: Schools },
        { path: '/login', component: LoginPage },
        { path: '/signup', component: SignupPage },
        { path: '/passwordRecovery', component: PasswordRecovery },
        { path: '/passwordReset', component: ResetPassword },
        { path: '/highschool', component: HighSchool },
        { path: '/extra', component: Extra },
        { path: '/county', component: County },
        { path: '/national', component: National },
    ],
});

export default router;
