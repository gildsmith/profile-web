<script setup>
import {useRecoveryRequest} from '../composables/recoveryRequest.ts'
import {watch} from 'vue'
import BaseInput from '../components/BaseInput.vue'
import BaseButton from '../components/BaseButton.vue'

const {formData, formState, submitForm} = useRecoveryRequest()

const emit = defineEmits(['idle', 'submitting', 'success', 'error'])

watch(formState, (formState) => {
    emit(formState.state, formState, formData)
})
</script>

<template>
    <div class="formWrapper">
        <h1>Recover Account</h1>
        <span>
            If there is an account associated with your email address,
            we will send you an email containing a link to reset your password.
        </span>
        <form class="form" @submit.prevent="submitForm">
            <BaseInput v-model="formData.email" :errors="formState.errors.email" label="Email Address" type="email"/>
            <BaseButton :errors="formState.errors.common" :state="formState.state" label="Send Form">
                <router-link :to="{name: 'profile.authentication'}" class="button button-secondary">
                    Back to Login
                </router-link>
            </BaseButton>
        </form>
    </div>
</template>

<style scoped>
.formWrapper {
    @apply flex flex-col justify-center gap-4 p-4 m-auto min-h-full max-w-sm;
}

.form {
    @apply grid gap-4;
}
</style>