<script setup>
import {IconArrowUpRight} from '@tabler/icons-vue'
import {computed} from 'vue'

const props = defineProps(['inboxAddress'])

const hrefAddress = computed(() => {
    return 'https://' + props.inboxAddress.split('@')[1]
})
</script>

<template>
    <div class="successView">
        <h1>Check Your Inbox 💌</h1>
        <span>
            If there is an account associated with your email address,
            we will send you an email containing a link to reset your password.
        </span>
        <a :href="hrefAddress" class="button">
            <span>Open Your Inbox ({{ hrefAddress }})</span>
            <IconArrowUpRight size="16" stroke="2"/>
        </a>
    </div>
</template>

<style scoped>
.successView {
    @apply flex flex-col items-center justify-center p-4 m-auto min-h-full max-w-sm  gap-2 text-center;
}
</style>