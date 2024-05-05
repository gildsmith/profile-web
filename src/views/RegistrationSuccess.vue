<script setup>
import {IconArrowNarrowRight} from '@tabler/icons-vue'
</script>

<template>
    <div class="successView">
        <h1>Registration Successful! 🎉</h1>
        <span>Your account needs verification. Please check your email for instructions.</span>
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