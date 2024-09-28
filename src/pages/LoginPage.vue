<script setup>
import {useTitle} from '@vueuse/core'
import {useRouter} from 'vue-router'

import {useUserStore} from '../stores/user.js'
import AuthenticationForm from '../views/AuthenticationForm.vue'

useTitle('Log In')

const router = useRouter()
const store = useUserStore()

function success(formState) {
    store.user = formState.response.data
    router.push({name: 'profile.dashboard.index'})
}
</script>

<template>
    <AuthenticationForm @success="success"/>
</template>