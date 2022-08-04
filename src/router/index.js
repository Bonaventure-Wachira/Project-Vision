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
            meta: {
                requiresAuth: true,
                title: 'My Dashboard',
            },
        },
        {
            path: '/myexams/:categoryId',
            component: ExamsPage,
            meta: { requiresAuth: true, title: 'My Exams' },
        },
        {
            path: '/secondaryexams/:categoryId',
            component: SecondaryExams,
            meta: { requiresAuth: true, title: 'My exams' },
        },
        {
            path: '/schools',
            component: Schools,
            name: 'schools',
            meta: { requiresAuth: true, title: 'Schools' },
        },
        {
            path: '/login',
            component: LoginPage,
            meta: { requiresUnAuth: true, title: 'Login' },
        },
        {
            path: '/signup',
            component: SignupPage,
            meta: { requiresUnAuth: true, title: 'Signup' },
        },
        {
            path: '/passwordRecovery',
            component: PasswordRecovery,
            meta: { requiresUnAuth: true, title: 'Password Recovery' },
        },
        {
            path: '/passwordReset',
            component: ResetPassword,
            meta: { requiresUnAuth: true, title: 'Reset your password' },
        },
        {
            path: '/highschool',
            component: HighSchool,
            meta: { requiresAuth: true, title: 'My Dashboard' },
        },
        {
            path: '/extra',
            component: Extra,
            meta: { requiresAuth: true, title: 'Extra county schools' },
        },
        {
            path: '/county',
            component: County,
            meta: { requiresAuth: true, title: 'County schools' },
        },
        {
            path: '/national',
            component: National,
            meta: { requiresAuth: true, title: 'National schools' },
        },
        {
            path: '/qualifiedcourses',
            component: QualifiedCourses,
            meta: { requiresAuth: true, title: 'My qualifies courses' },
        },
        {
            path: '/qualifiedcourses/:courseId',
            component: IndividualCourse,
            meta: { requiresAuth: true, title: 'My qualifies courses' },
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
    document.title = `${to.meta.title}`;
});

export default router;
