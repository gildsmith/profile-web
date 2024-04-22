<script setup>
import RegistrationForm from '../sections/RegistrationForm.vue'
import {useTitle} from '@vueuse/core'

useTitle('Create New Account')
</script>

<template>
    <div class="container">
        <div class="wrapper">
            <div class="form">
                <h1>Create New Account</h1>
                <RegistrationForm/>
                <router-link :to="{name: 'auth.login'}" class="redirect">
                    Already have an account? Click here to log in.
                </router-link>
            </div>
        </div>
        <div class="decoration"/>
    </div>
</template>

<style scoped>
.container {
    @apply grid min-h-full min-w-full;
    @apply lg:grid-cols-7;
}

.wrapper {
    @apply min-h-full p-6 flex flex-col items-center justify-center;
    @apply lg:col-span-3;
}

.form {
    @apply max-w-sm w-full grid gap-4;
}

.redirect {
    @apply text-sm underline;
}

.decoration {
    @apply bg-slate-100;
    @apply lg:col-span-4;
    @apply max-lg:order-first;
}
</style>