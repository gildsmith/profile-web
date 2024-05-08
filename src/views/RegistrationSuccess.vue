<script setup>
import {IconArrowNarrowRight} from '@tabler/icons-vue'
import {useI18n} from 'vue-i18n'

const {t} = useI18n()
</script>

<template>
    <div class="successView">
        <h1>{{ t('Registration successful!')}}</h1>
        <span>{{ t('Your account needs verification. Please check your email for instructions.') }}</span>
        <router-link :to="{name: 'profile.authentication'}" class="button">
            <span>{{ t('Log in') }}</span>
            <IconArrowNarrowRight size="16" stroke="2"/>
        </router-link>
    </div>
</template>

<style scoped>
.successView {
    @apply flex flex-col items-center justify-center p-4 m-auto min-h-full max-w-sm  gap-2 text-center;
}
</style>