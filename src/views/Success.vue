<script setup>
import {IconArrowNarrowRight} from '@tabler/icons-vue'
import {useTitle} from '@vueuse/core'

useTitle('Success!')
</script>

<template>
    <div class="successContainer">
        <h1>Registration Successful! 🎉</h1>
        <span>Your account needs verification. Please check your email for instructions.</span>
        <router-link :to="{name: 'profile.login'}" class="button">
            <span>Log In Now</span>
            <IconArrowNarrowRight size="16" stroke="2"/>
        </router-link>
    </div>
</template>

<style scoped>
.successContainer {
    @apply max-w-sm m-auto min-h-full p-6 flex flex-col gap-2 items-center justify-center text-center;
}
</style>