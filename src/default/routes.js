import DashboardView from '../pages/DashboardPage.vue'
import AuthenticationView from '../pages/LoginPage.vue'
import RegistrationView from '../pages/RegisterPage.vue'
import RecoveryRequestView from '../pages/RecoveryRequestPage.vue'
import RecoveryCompletionView from '../pages/RecoveryCompletionPage.vue'
import routerDashboard from './router.dashboard.js'

export default [
    {
        name: 'profile.dashboard',
        path: '/',
        component: DashboardView,
        meta: {authenticated: true},
        children: routerDashboard,
    },
    {
        name: 'profile.authentication',
        path: '/login',
        component: AuthenticationView,
        meta: {authenticated: false, feature: 'authentication'},
    },
    {
        name: 'profile.registration',
        path: '/register',
        component: RegistrationView,
        meta: {authenticated: false, feature: 'registration'},
    },
    {
        name: 'profile.recovery',
        path: '/recovery',
        component: RecoveryRequestView,
        meta: {feature: 'authentication'},
    },
    {
        name: 'profile.recovery.complete',
        path: '/recovery/:token',
        component: RecoveryCompletionView,
        meta: {feature: 'authentication'},
        props: true,
    },
    {
        name: 'profile.fallback',
        path: '/:fallback(.*)*',
        redirect: {name: 'profile.dashboard.index'},
    },
]