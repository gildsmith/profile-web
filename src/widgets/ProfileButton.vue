<script setup>
import LoginButton from './profileButton/LoginButton.vue'
import IndexButton from './profileButton/IndexButton.vue'
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