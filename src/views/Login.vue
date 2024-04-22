<script setup>
import {useTitle} from '@vueuse/core'
import AuthenticationForm from '../sections/AuthenticationForm.vue'

useTitle('Log In')
</script>

<template>
    <div class="container">
        <div class="wrapper">
            <div class="form">
                <h1>Welcome Back</h1>
                <AuthenticationForm/>
                <router-link :to="{name: 'auth.register'}" class="redirect">
                    First time here? Click here to create a new account.
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