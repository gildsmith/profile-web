import DashboardView from './views/DashboardView.vue'
import AuthenticationView from './views/AuthenticationView.vue'
import RegistrationView from './views/RegistrationView.vue'
import RecoveryRequestView from './views/RecoveryRequestView.vue'
import RecoveryCompletionView from './views/RecoveryCompletionView.vue'

export default [
    {
        name: 'profile.dashboard',
        path: '/',
        component: DashboardView,
        meta: {authenticated: true},
        children: [/* todo! import dashboard children dynamically */],
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
        name: 'profile.recovery.request',
        path: '/recovery',
        component: RecoveryRequestView,
        meta: {feature: 'authentication'}
    },
    {
        name: 'profile.recovery.request',
        path: '/recovery/success',
        component: RecoveryRequestView,
        meta: {feature: 'authentication'}
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
        redirect: {name: 'profile.dashboard'},
    },
]