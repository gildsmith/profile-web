<script setup>
import LoginButton from './ProfileButton/LoginButton.vue'
import IndexButton from './ProfileButton/IndexButton.vue'
import {ref} from 'vue'

const authenticated = ref(false)

axios.get('/api/authentication/user').then(response => {
    authenticated.value = !!response.data.id
}).catch(() => {})
</script>

<template>
    <LoginButton v-if="!authenticated"/>
    <IndexButton v-if="authenticated"/>
</template>