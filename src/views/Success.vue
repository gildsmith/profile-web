<script setup>
import {IconArrowNarrowRight} from '@tabler/icons-vue'
import {useTitle} from '@vueuse/core'

useTitle('Success!')
</script>

<template>
    <div class="container">
        <div class="wrapper">
            <h1>Registration Successful! 🎉</h1>
            <span>Your account needs verification. Please check your email for instructions.</span>
            <router-link :to="{name: 'profile.login'}" class="button">
                <span>Log In Now</span>
                <IconArrowNarrowRight size="16" stroke="2"/>
            </router-link>
        </div>
    </div>
</template>

<style scoped>
.container {
    @apply m-auto min-h-full p-6 max-w-sm flex items-center justify-center;
}

.wrapper {
    @apply flex flex-col text-center gap-2 justify-center items-center;
}
</style>