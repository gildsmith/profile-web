import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Success from './views/Success.vue'
import Dashboard from './views/Dashboard.vue'

// todo import dashboard children dynamically

export default [
    {
        name: 'profile.dashboard',
        path: '/',
        component: Dashboard,
        meta: {authenticated: true},
        children: [/* todo! */],
    },
    {
        name: 'profile.login',
        path: '/login',
        component: Login,
        meta: {authenticated: false, feature: 'authentication'},
    },
    {
        name: 'profile.register',
        path: '/register',
        component: Register,
        meta: {authenticated: false, feature: 'registration'},
    },
    {
        name: 'profile.success',
        path: '/success',
        component: Success,
        meta: {feature: 'registration'},
    },
    {
        name: 'profile.fallback',
        path: '/:fallback(.*)*',
        redirect: {name: 'profile.dashboard'},
    },
]