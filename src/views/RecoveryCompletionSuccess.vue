<script setup>
import {IconArrowNarrowRight} from '@tabler/icons-vue'
</script>

<template>
    <div class="successView">
        <h1>Password Changed ✨</h1>
        <span>
            Your password has been changed successfully. We've sent
            a confirmation email to your registered email address.
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