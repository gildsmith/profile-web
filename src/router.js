import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Success from './views/Success.vue'
import Profile from './views/Index.vue'

export default [
    {
        name: 'profile.index',
        path: '/',
        component: Profile,
        meta: {authenticated: true},
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
]