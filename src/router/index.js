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
import QualifiedCourses from './../components/layout/QualifiedCourses.vue';
import IndividualCourse from './../components/layout/IndividualCourse.vue';
import store from './../store/index';

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        { path: '/', redirect: '/dashboard', meta: { requiresAuth: true } },
        {
            path: '/dashboard',
            component: DashBoardPage,
            meta: { requiresAuth: true },
        },
        {
            path: '/myexams/:categoryId',
            component: ExamsPage,
            meta: { requiresAuth: true },
        },
        {
            path: '/secondaryexams/:categoryId',
            component: SecondaryExams,
            meta: { requiresAuth: true },
        },
        {
            path: '/schools',
            component: Schools,
            name: 'schools',
            meta: { requiresAuth: true },
        },
        {
            path: '/login',
            component: LoginPage,
            meta: { requiresUnAuth: true },
        },
        {
            path: '/signup',
            component: SignupPage,
            meta: { requiresUnAuth: true },
        },
        {
            path: '/passwordRecovery',
            component: PasswordRecovery,
            meta: { requiresUnAuth: true },
        },
        {
            path: '/passwordReset',
            component: ResetPassword,
            meta: { requiresUnAuth: true },
        },
        {
            path: '/highschool',
            component: HighSchool,
            meta: { requiresAuth: true },
        },
        { path: '/extra', component: Extra, meta: { requiresAuth: true } },
        { path: '/county', component: County, meta: { requiresAuth: true } },
        {
            path: '/national',
            component: National,
            meta: { requiresAuth: true },
        },
        {
            path: '/qualifiedcourses',
            component: QualifiedCourses,
            meta: { requiresAuth: true },
        },
        {
            path: '/qualifiedcourses/:courseId',
            component: IndividualCourse,
            meta: { requiresAuth: true },
        },
    ],
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.getters.isAuth) {
        next('/login');
    } else if (to.meta.requiresUnAuth && store.getters.isAuth) {
        next('/');
    } else {
        next();
    }
});

export default router;
