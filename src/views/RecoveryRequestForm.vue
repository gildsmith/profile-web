<script setup>
import {useRecoveryRequest} from '../composables/recoveryRequest.ts'
import {watch} from 'vue'
import BaseInput from '../components/BaseInput.vue'
import BaseButton from '../components/BaseButton.vue'

const {formModel, formState, submitForm} = useRecoveryRequest()

const emit = defineEmits(['idle', 'submitting', 'success', 'error'])

watch(formState, (formState) => {
    emit(formState.state, formState, formModel)
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
            <BaseInput v-model="formModel.email" :errors="formState.errors.email" label="Email Address" type="email"/>
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
    @apply flex flex-col gap-4 p-4 m-auto max-w-sm;
}

.form {
    @apply grid gap-4;
}
</style>