<script setup>
import {useTitle} from '@vueuse/core'
import AuthenticationForm from '../sections/AuthenticationForm.vue'

useTitle('Log In')
</script>

<template>
    <div class="formContainer">
        <div class="formWrapper">
            <h1>Welcome Back</h1>
            <AuthenticationForm/>
            <router-link :to="{name: 'profile.register'}" class="redirectButton">
                First time here? Click here to create a new account.
            </router-link>
        </div>
    </div>
</template>

<style scoped>
.formContainer {
    @apply min-h-full p-4 flex items-center justify-center;
}

.formWrapper {
    @apply max-w-sm w-full grid gap-4;
}

.redirectButton {
    @apply text-sm underline;
}
</style>