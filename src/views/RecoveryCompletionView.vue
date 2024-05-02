<script setup>
import {useTitle} from '@vueuse/core'
import RecoveryCompletionForm from '../sections/RecoveryCompletionForm.vue'

useTitle('Complete Account Recovery')

const props = defineProps(['token'])
</script>

<template>
    <div class="formContainer">
        <div class="formWrapper">
            <h1>Complete Account Recovery</h1>
            <span>
                Please enter your new password below to complete the recovery of your account.
            </span>
            <RecoveryCompletionForm :token="props.token"/>
        </div>
    </div>
</template>

<style scoped>
.formContainer {
    @apply min-h-full p-4 flex items-center justify-center;
}

.formWrapper {
    @apply max-w-sm w-full grid gap-4;
}
</style>