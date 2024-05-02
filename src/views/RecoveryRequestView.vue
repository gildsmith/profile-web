<script setup>
import {useTitle} from '@vueuse/core'
import RecoveryForm from '../sections/RecoveryRequestForm.vue'

useTitle('Recover Account')
</script>

<template>
    <div class="formContainer">
        <div class="formWrapper">
            <h1>Recover Account</h1>
            <span>
                If there is an account associated with your email address,
                we will send you an email containing a link to reset your password.
            </span>
            <RecoveryForm/>
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