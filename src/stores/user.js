// noinspection JSUnresolvedReference

import {defineStore} from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        fetched: false,
        user: {id: null},
    }),
    actions: {
        async fetch() {
            if (this.fetched)
                return

            await axios.get('/api/authentication/user').then(response => {
                this.user = response.data
                this.fetched = true
            }).catch(() => {
            })
        },
        invalidate() {
            this.fetched = false
            this.user = {id: null}
        },
    },
    getters: {
        authenticated() {
            return !!this.user.id
        },
    },
})