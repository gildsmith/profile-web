<script setup>
import {IconArrowRight} from '@tabler/icons-vue'
import {useI18n} from 'vue-i18n'

const {t} = useI18n()
</script>

<template>
    <div class="successView">
        <h1>{{ t('Check your inbox 💌') }}</h1>
        <span>{{ t('If there is an account associated with your email address, we will send you an email containing a link to reset your password.') }}</span>
        <RouterLink :to="{ name: 'profile.authentication'}" class="button">
            <span>{{ t('Back to login') }}</span>
            <IconArrowRight size="16" stroke="2"/>
        </RouterLink>
    </div>
</template>

<style scoped>
.successView {
    @apply flex flex-col items-center justify-center p-4 m-auto min-h-full max-w-sm  gap-2 text-center;
}
</style>