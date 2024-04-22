import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Success from './views/Success.vue'
import Profile from './views/Index.vue'

export default [
    {
        name: 'auth.index',
        path: '/',
        component: Profile,
        meta: {authenticated: true},
    },
    {
        name: 'auth.login',
        path: '/login',
        component: Login,
        meta: {authenticated: false, feature: 'authentication'},
    },
    {
        name: 'auth.register',
        path: '/register',
        component: Register,
        meta: {authenticated: false, feature: 'registration'},
    },
    {
        name: 'auth.success',
        path: '/success',
        component: Success,
        meta: {feature: 'registration'},
    },
]