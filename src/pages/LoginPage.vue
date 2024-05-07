<script setup>
import {useTitle} from '@vueuse/core'
import AuthenticationForm from '../views/AuthenticationForm.vue'
import {useUserStore} from '../stores/user.js'
import {useRouter} from 'vue-router'

useTitle('Log In')

const router = useRouter()
const store = useUserStore()

function success(formState) {
    store.user = formState.response.data
    router.push({name: 'profile.dashboard'})
}
</script>

<template>
    <AuthenticationForm @success="success"/>
</template>