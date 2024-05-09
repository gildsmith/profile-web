import ChangePassword from './views/Dashboard/ChangePassword.vue'
import DashboardIndex from './views/Dashboard/DashboardIndex.vue'

export default [
    {
        name: 'profile.dashboard.index',
        component: DashboardIndex,
        'path': '/',
    },
    {
        name: 'profile.dashboard.password',
        component: ChangePassword,
        path: '/password',
        meta: {name: 'Change password'},
    },

]