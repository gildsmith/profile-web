<script setup>

import {IconArrowNarrowRight} from '@tabler/icons-vue'
</script>

<template>
    <div class="successView">
        <h1>Check your inbox 💌</h1>
        <span>
            If there is an account associated with your email address,
            we will send you an email containing a link to reset your password.
        </span>
        <router-link :to="{name: 'profile.authentication'}" class="button">
            <span>Log In Now</span>
            <IconArrowNarrowRight size="16" stroke="2"/>
        </router-link>
    </div>
</template>

<style scoped>
.successView {
    @apply flex flex-col items-center justify-center p-4 m-auto min-h-full max-w-sm  gap-2 text-center;
}
</style>