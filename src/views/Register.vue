<script setup>
import RegistrationForm from '../sections/RegistrationForm.vue'
import {useTitle} from '@vueuse/core'

useTitle('Create New Account')
</script>

<template>
        <div class="formContainer">
            <div class="formWrapper">
                <h1>Create New Account</h1>
                <RegistrationForm/>
                <router-link :to="{name: 'profile.login'}" class="redirectButton">
                    Already have an account? Click here to log in.
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