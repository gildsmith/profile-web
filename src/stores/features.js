// noinspection JSUnresolvedReference

import {defineStore} from 'pinia'

/**
 * Pinia store for managing enabled API features. Fetches features from
 * the backend and stores them locally to optimize frontend usage.
 */
export const useFeaturesStore = defineStore('features', {
    state: () => ({
        fetched: false,
        features: {},
    }),
    actions: {
        async fetch() {
            if (this.fetched)
                return

            const response = await axios.get('/_gildsmith/features')
            this.user = response.data
            this.fetched = true
        },
    },
})