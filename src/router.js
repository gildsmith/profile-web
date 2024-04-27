import DashboardView from './views/DashboardView.vue'
import LoginView from './views/LoginView.vue'
import RegisterView from './views/RegisterView.vue'
import SuccessView from './views/SuccessView.vue'

// todo import dashboard children dynamically

export default [
    {
        name: 'profile.dashboard',
        path: '/',
        component: DashboardView,
        meta: {authenticated: true},
        children: [/* todo! */],
    },
    {
        name: 'profile.login',
        path: '/login',
        component: LoginView,
        meta: {authenticated: false, feature: 'authentication'},
    },
    {
        name: 'profile.register',
        path: '/register',
        component: RegisterView,
        meta: {authenticated: false, feature: 'registration'},
    },
    {
        name: 'profile.success',
        path: '/success',
        component: SuccessView,
        meta: {feature: 'registration'},
    },
    {
        name: 'profile.fallback',
        path: '/:fallback(.*)*',
        redirect: {name: 'profile.dashboard'},
    },
]